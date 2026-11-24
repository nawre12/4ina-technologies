import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PostService, Post } from '../../../services/post.service';

interface BlogPost {
  id: number;
  title: string;
  date: string;
  category: string;
  excerpt: string;
  image: string;
  link: string;
}

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.css'
})
export class BlogComponent implements OnInit {
  blogPosts: Post[] = [];
  selectedPost: Post | null = null;
  isModalOpen = false;

  constructor(private postService: PostService) { }

  ngOnInit() {
    this.postService.getPostsByCategory('Blog').subscribe(data => {
      this.blogPosts = data;
    });
  }

  openModal(post: Post) {
    this.selectedPost = post;
    this.isModalOpen = true;
    document.body.style.overflow = 'hidden';
  }

  closeModal() {
    this.isModalOpen = false;
    this.selectedPost = null;
    document.body.style.overflow = 'auto';
  }
}
