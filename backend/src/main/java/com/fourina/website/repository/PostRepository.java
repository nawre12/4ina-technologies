package com.fourina.website.repository;

import com.fourina.website.entity.Post;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface PostRepository extends JpaRepository<Post, Long> {
    List<Post> findByCategoryOrderByCreatedAtDesc(String category);
    List<Post> findAllByOrderByCreatedAtDesc();
}
