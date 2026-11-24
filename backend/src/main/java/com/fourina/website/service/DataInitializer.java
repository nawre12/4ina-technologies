package com.fourina.website.service;

import com.fourina.website.entity.Post;
import com.fourina.website.entity.User;
import com.fourina.website.repository.PostRepository;
import com.fourina.website.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class DataInitializer implements CommandLineRunner {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private PostRepository postRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @Override
    public void run(String... args) throws Exception {
        // 1. Initialisation de l'Admin si inexistant
        userRepository.findByUsernameIgnoreCase("admin").ifPresentOrElse(
                user -> {
                    user.setPassword(passwordEncoder.encode("admin123"));
                    userRepository.save(user);
                },
                () -> {
                    User admin = new User();
                    admin.setUsername("admin");
                    admin.setPassword(passwordEncoder.encode("admin123"));
                    admin.setRole("ROLE_ADMIN");
                    userRepository.save(admin);
                    System.out.println("✅ Admin créé par défaut: admin / admin123");
                });

        // 2. Initialisation des Posts (Blog, Events, Services, Solutions) si vide
        if (postRepository.count() == 0) {
            seedPosts();
        }
    }

    private void seedPosts() {
        // Events & News from Screenshot
        createPost("Official Visit of the Democratic Republic of Congo Delegation",
                "We had the honor of welcoming a high-level delegation from the Democratic Republic of Congo, led by H.E. Kibasa Maliba Augustin, Minister of Posts and Digital Telecommunications.",
                "assets/events/delegation_1.jpg", "Event");

        createPost("4InA Technologie at PetroAfrica 2025",
                "Powering Africa’s sustainable energy transformation at PetroAfrica 2025 in Tunis. Our team presented AI-driven solutions for the energy sector.",
                "assets/events/petro_1.jpg", "Event");

        createPost("Join Our Co-Founder on Express FM",
                "Tune in as our co-founder, Sabri Mhimdi, shares valuable insights on AI and embedded systems on Express FM. A deep dive into technological innovation.",
                "assets/events/express_fm_card.png", "Event");

        // Additional Real Content from Assets
        createPost("Digital Energy Winner",
                "4InA is proud to be recognized for its innovation in digital energy management. Our solutions continue to lead the way in efficiency.",
                "assets/events/digital_energy_winner.jpg", "Event");

        createPost("Audit Énergétique Industriel",
                "Analyse complète de vos consommations pour identifier les gisements d'économies d'énergie et optimiser vos factures.",
                "assets/software-intelligent-management.jpg", "Service");

        createPost("Développement de Solutions IoT",
                "Conception de capteurs intelligents et de plateformes de monitoring sur mesure pour l'Industrie 4.0.",
                "assets/hero-ai-energy.png", "Service");

        System.out.println("🌱 Base de données restaurée avec vos contenus réels (Congo, PetroAfrica, Express FM).");
    }

    private void createPost(String title, String content, String imageUrl, String category) {
        Post post = new Post();
        post.setTitle(title);
        post.setContent(content);
        post.setImageUrl(imageUrl);
        post.setCategory(category);
        postRepository.save(post);
    }
}
