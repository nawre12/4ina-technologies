import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { PostService, Post } from '../../../services/post.service';

@Component({
  selector: 'app-events',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './events.component.html',
  styleUrl: './events.component.css'
})
export class EventsComponent implements OnInit {
  events: any[] = [];
  selectedEvent: any = null;
  isModalOpen = false;

  constructor(
    private sanitizer: DomSanitizer,
    private postService: PostService
  ) { }

  ngOnInit() {
    this.loadEvents();
  }

  loadEvents() {
    this.postService.getPostsByCategory('Event').subscribe({
      next: (data: Post[]) => {
        this.events = data.map(post => ({
          ...post,
          description: post.content.substring(0, 100) + '...', // Preview
          fullDescription: post.content,
          image: post.imageUrl,
          date: post.createdAt,
          media: post.imageUrl ? [{ type: 'image', url: post.imageUrl }] : [] // Adapt for template
        }));
      },
      error: (err) => console.error('Error loading events:', err)
    });
  }

  getSafeUrl(url: string): SafeResourceUrl {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

  openModal(event: any) {
    this.selectedEvent = event;
    this.isModalOpen = true;
    document.body.style.overflow = 'hidden'; // Prevent scrolling
  }

  closeModal() {
    this.isModalOpen = false;
    this.selectedEvent = null;
    document.body.style.overflow = 'auto'; // Restore scrolling
  }
}
