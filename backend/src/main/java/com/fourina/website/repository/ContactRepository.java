package com.fourina.website.repository;

import com.fourina.website.entity.ContactRequest;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ContactRepository extends JpaRepository<ContactRequest, Long> {
    java.util.List<ContactRequest> findAllByOrderByCreatedAtDesc();
}
