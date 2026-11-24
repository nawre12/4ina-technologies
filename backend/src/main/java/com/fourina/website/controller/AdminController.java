package com.fourina.website.controller;

import com.fourina.website.entity.ContactRequest;
import com.fourina.website.repository.ContactRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/admin")
public class AdminController {

    @Autowired
    private ContactRepository contactRepository;

    @GetMapping("/requests")
    public List<ContactRequest> getAllRequests() {
        return contactRepository.findAllByOrderByCreatedAtDesc();
    }

    @PutMapping("/requests/{id}/read")
    public ResponseEntity<?> markAsRead(@PathVariable Long id) {
        return contactRepository.findById(id)
                .map(request -> {
                    if (request == null) return ResponseEntity.notFound().build();
                    request.setRead(true);
                    contactRepository.save(request);
                    return ResponseEntity.ok(Map.of("message", "Marqué comme lu"));
                })
                .orElse(ResponseEntity.notFound().build());
    }

    @DeleteMapping("/requests/{id}")
    public ResponseEntity<?> deleteRequest(@PathVariable Long id) {
        if (contactRepository.existsById(id)) {
            contactRepository.deleteById(id);
            return ResponseEntity.ok(Map.of("message", "Supprimé avec succès"));
        }
        return ResponseEntity.notFound().build();
    }
}
