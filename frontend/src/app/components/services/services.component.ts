import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostService, Post } from '../../services/post.service';

@Component({
    selector: 'app-services',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './services.component.html',
    styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {
    services: Post[] = [];
    solutions: Post[] = [];

    showDetailsModal = false;
    selectedPost: Post | null = null;

    private backendBaseUrl = 'http://localhost:8081';

    constructor(private postService: PostService) { }

    ngOnInit() {
        this.postService.getPostsByCategory('Service').subscribe(data => this.services = data);
        this.postService.getPostsByCategory('Solution').subscribe(data => this.solutions = data);
    }

    openDetails(post: Post) {
        this.selectedPost = post;
        this.showDetailsModal = true;
        document.body.classList.add('modal-open');
    }

    closeDetails() {
        this.showDetailsModal = false;
        this.selectedPost = null;
        document.body.classList.remove('modal-open');
    }

    getImageUrl(post: Post): string {
        const raw = (post.imageUrl || '').trim();
        if (!raw) return '';
        if (raw.startsWith('http://') || raw.startsWith('https://')) return raw;
        if (raw.startsWith('assets/')) return raw;

        const normalized = raw.startsWith('/') ? raw : `/${raw}`;
        return `${this.backendBaseUrl}${normalized}`;
    }

    onImageError(event: Event) {
        const img = event.target as HTMLImageElement | null;
        if (!img) return;
        img.src = 'assets/hero-ai-energy-option2.jpg';
    }
}
