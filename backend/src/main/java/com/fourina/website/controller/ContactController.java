package com.fourina.website.controller;

import com.fourina.website.dto.ContactForm;
import com.fourina.website.entity.ContactRequest;
import com.fourina.website.repository.ContactRepository;
import com.fourina.website.service.EmailService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
@RequestMapping("/api/contact")
public class ContactController {

    @Autowired
    private EmailService emailService;

    @Autowired
    private ContactRepository contactRepository;

    @PostMapping
    public ResponseEntity<?> submitContactForm(@RequestBody ContactForm form) {
        System.out.println("🔔 REÇU : Demande de contact de " + form.getName());
        try {
            // Sauvegarder dans la base de données
            ContactRequest request = new ContactRequest();
            request.setName(form.getName());
            request.setEmail(form.getEmail());
            request.setPhone(form.getPhone());
            request.setCompany(form.getCompany());
            request.setService(form.getService());
            request.setMessage(form.getMessage());
            contactRepository.save(request);

            // Envoyer l'email
            emailService.sendContactEmail(form);
            return ResponseEntity.ok(Map.of("message", "Email envoyé et sauvegardé avec succès !"));
        } catch (Exception e) {
            e.printStackTrace();
            return ResponseEntity.internalServerError()
                    .body(Map.of("error", "Erreur lors de l'envoi : " + e.getMessage()));
        }
    }

    @GetMapping("/test")
    public ResponseEntity<?> testConnection() {
        return ResponseEntity.ok(Map.of("message", "Le backend fonctionne correctement !"));
    }
}
