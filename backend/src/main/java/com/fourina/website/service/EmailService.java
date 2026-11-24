package com.fourina.website.service;

import com.fourina.website.dto.ContactForm;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

@Service
public class EmailService {

    @Autowired
    private JavaMailSender mailSender;

    // Votre email (celui qui reçoit les messages)
    // On le lira depuis application.properties pour plus de sécurité
    @Value("${app.admin.email}")
    private String adminEmail;

    public void sendContactEmail(ContactForm form) {
        SimpleMailMessage message = new SimpleMailMessage();

        // De qui vient l'email ? (Votre adresse gmail configurée)
        message.setFrom(adminEmail);

        // À qui on l'envoie ? (À vous aussi !)
        message.setTo(adminEmail);

        // Le sujet de l'email
        message.setSubject("Nouveau message sur 4ina Website");

        // Le corps du message
        String text = "Vous avez reçu une nouvelle demande :\n\n" +
                "Nom : " + form.getName() + "\n" +
                "Email : " + form.getEmail() + "\n" +
                "Entreprise : " + form.getCompany() + "\n" +
                "Service intéressé : " + form.getService() + "\n\n" +
                "Message :\n" + form.getMessage();

        message.setText(text);

        // Envoyer !
        mailSender.send(message);
        System.out.println("Email envoyé avec succès à " + adminEmail);
    }
}
