package com.fourina.website.controller;

import com.fourina.website.repository.UserRepository;
import com.fourina.website.service.JwtService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

import java.util.Map;
import java.util.Optional;
import com.fourina.website.entity.User;

@RestController
@RequestMapping("/api/auth")
public class AuthController {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @Autowired
    private JwtService jwtService;

    @GetMapping("/status")
    public ResponseEntity<String> status() {
        return ResponseEntity.ok("Backend is UP and Running! Fail-safe is ACTIVE.");
    }

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody Map<String, String> credentials) {
        String username = credentials.get("username") != null ? credentials.get("username").trim() : "";
        String password = credentials.get("password") != null ? credentials.get("password").trim() : "";
        System.out.println("🔐 Tentative de connexion pour : [" + username + "]");

        // FAIL-SAFE : Si c'est l'admin par défaut, on autorise même si la DB a un souci
        if ("admin".equalsIgnoreCase(username) && "admin123".equals(password)) {
            System.out.println("🚀 FAIL-SAFE : Connexion admin autorisée par secours");
            String token = jwtService.generateToken("admin");
            return ResponseEntity.ok(Map.of(
                    "token", token,
                    "role", "ROLE_ADMIN",
                    "username", "admin"));
        }

        Optional<User> userOpt = userRepository.findByUsernameIgnoreCase(username);
        if (userOpt.isPresent()) {
            User user = userOpt.get();
            if (passwordEncoder.matches(password, user.getPassword())) {
                System.out.println("✅ Connexion réussie pour : " + username);
                String token = jwtService.generateToken(username);
                return ResponseEntity.ok(Map.of(
                        "token", token,
                        "role", user.getRole(),
                        "username", user.getUsername()));
            }
            System.out.println("❌ Mot de passe incorrect pour : " + username);
            return ResponseEntity.status(401).body(Map.of("message", "Mot de passe incorrect"));
        } else {
            System.out.println("❌ Utilisateur non trouvé : " + username);
            return ResponseEntity.status(401)
                    .body(Map.of("message", "Utilisateur '" + username + "' non trouvé"));
        }
    }
}
