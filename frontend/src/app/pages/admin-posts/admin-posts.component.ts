import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PostService, Post } from '../../services/post.service';

@Component({
  selector: 'app-admin-posts',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="posts-mgmt">
      <div class="d-flex justify-content-between align-items-center mb-4">
        <h3 class="fw-bold m-0">Gestion du Contenu</h3>
        <button (click)="openModal()" class="btn btn-primary d-flex align-items-center gap-2">
          <i class="fas fa-plus"></i> Nouveau Contenu
        </button>
      </div>

      <div class="filters mb-4 d-flex gap-2">
        <button *ngFor="let cat of categories" 
                (click)="filterBy(cat)" 
                [class.btn-dark]="selectedCat === cat"
                [class.btn-outline-dark]="selectedCat !== cat"
                class="btn btn-sm px-3 rounded-pill">
          {{ cat }}
        </button>
      </div>

      <div class="row g-4">
        <div *ngFor="let post of filteredPosts" class="col-md-6 col-lg-4">
          <div class="post-card shadow-sm border-0 rounded-4 overflow-hidden h-100 bg-white">
            <div class="post-img" [style.backgroundImage]="'url(' + post.imageUrl + ')'">
              <span class="badge bg-primary m-3">{{ post.category }}</span>
            </div>
            <div class="p-4 d-flex flex-column">
              <h5 class="fw-bold mb-2">{{ post.title }}</h5>
              <p class="text-muted small flex-grow-1 text-truncate-2">{{ post.content }}</p>
              <div class="d-flex gap-2 mt-3 pt-3 border-top">
                <button (click)="editPost(post)" class="btn btn-light btn-sm flex-grow-1">Modifier</button>
                <button (click)="deletePost(post.id!)" class="btn btn-outline-danger btn-sm">
                  <i class="fas fa-trash"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Modal -->
      <div *ngIf="showModal" class="modal-backdrop d-flex align-items-center justify-content-center">
        <div class="modal-card p-5 bg-white rounded-4 shadow-lg w-100 mx-3" style="max-width: 600px;">
          <h4 class="fw-bold mb-4">{{ editing ? 'Modifier' : 'Nouveau' }} Contenu</h4>
          <form (ngSubmit)="savePost()">
            <div class="mb-3">
              <label class="form-label small fw-bold">Titre</label>
              <input type="text" [(ngModel)]="currentPost.title" name="title" class="form-control" required>
            </div>
    <div class="row g-3 mb-3">
              <div class="col-md-6">
                <label class="form-label small fw-bold">Catégorie</label>
                <select [(ngModel)]="currentPost.category" name="category" class="form-select">
                  <option *ngFor="let c of categories.slice(1)" [value]="c">{{ c }}</option>
                </select>
              </div>
              <div class="col-md-6">
                <label class="form-label small fw-bold">Image du Post</label>
                <div class="input-group">
                  <input type="file" (change)="onFileSelected($event)" class="form-control" accept="image/*">
                </div>
                <div class="mt-2" *ngIf="currentPost.imageUrl">
                  <img [src]="currentPost.imageUrl" style="height: 60px; border-radius: 8px;" class="shadow-sm">
                  <span class="ms-2 x-small text-muted">Aperçu</span>
                </div>
              </div>
            </div>
            <div class="mb-4">
              <label class="form-label small fw-bold">Contenu</label>
              <textarea [(ngModel)]="currentPost.content" name="content" class="form-control" rows="6" required></textarea>
            </div>
            <div class="d-flex gap-3">
              <button type="button" (click)="showModal = false" class="btn btn-light flex-grow-1">Annuler</button>
              <button type="submit" class="btn btn-primary flex-grow-1" [disabled]="uploading">
                {{ uploading ? 'Envoi...' : 'Enregistrer' }}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .post-img { height: 160px; background-size: cover; background-position: center; }
    .text-truncate-2 { display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden; }
    .modal-backdrop { 
      position: fixed; top: 0; left: 0; width: 100%; height: 100vh; 
      background: rgba(0,0,0,0.5); z-index: 1050; backdrop-filter: blur(4px);
    }
    .badge { font-size: 0.7rem; font-weight: 600; text-transform: uppercase; }
    .x-small { font-size: 0.7rem; }
  `]
})
export class AdminPostsComponent implements OnInit {
  posts: Post[] = [];
  categories = ['Tous', 'Blog', 'Event', 'Service', 'Solution'];
  selectedCat = 'Tous';
  showModal = false;
  editing = false;
  uploading = false;
  currentPost: Post = { title: '', content: '', imageUrl: '', category: 'Blog', published: true };

  constructor(private postService: PostService) { }

  ngOnInit() { this.load(); }

  load() { this.postService.getPosts().subscribe(data => this.posts = data); }

  get filteredPosts() {
    return this.selectedCat === 'Tous' ? this.posts : this.posts.filter(p => p.category === this.selectedCat);
  }

  filterBy(cat: string) { this.selectedCat = cat; }

  openModal() {
    this.editing = false;
    this.currentPost = { title: '', content: '', imageUrl: 'assets/default.jpg', category: 'Blog', published: true };
    this.showModal = true;
  }

  editPost(post: Post) {
    this.editing = true;
    this.currentPost = { ...post };
    this.showModal = true;
  }

  onFileSelected(event: any) {
    const file: File = event.target.files[0];
    if (file) {
      this.uploading = true;
      this.postService.uploadImage(file).subscribe({
        next: (res: { url: string }) => {
          this.currentPost.imageUrl = 'http://localhost:8081' + res.url;
          this.uploading = false;
        },
        error: (err: any) => {
          console.error('Upload error:', err);
          alert('Erreur lors de l\'envoi de l\'image.');
          this.uploading = false;
        }
      });
    }
  }

  savePost() {
    if (this.editing) {
      this.postService.updatePost(this.currentPost.id!, this.currentPost).subscribe(() => {
        this.load();
        this.showModal = false;
      });
    } else {
      this.postService.createPost(this.currentPost).subscribe(() => {
        this.load();
        this.showModal = false;
      });
    }
  }

  deletePost(id: number) {
    if (confirm('Voulez-vous vraiment supprimer ce contenu ?')) {
      this.postService.deletePost(id).subscribe(() => this.load());
    }
  }
}
