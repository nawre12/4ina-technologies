import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminService, ContactRequest } from '../../services/admin.service';
import { AuthService } from '../../services/auth.service';
import { AdminPostsComponent } from '../admin-posts/admin-posts.component';

@Component({
  selector: 'app-admin-dashboard',
  standalone: true,
  imports: [CommonModule, AdminPostsComponent],
  template: `
    <div class="dashboard-wrapper">
      <div class="sidebar shadow-sm">
        <div class="sidebar-brand p-4">
          <img src="assets/logo.jpg" alt="4InA">
          <h5 class="fw-bold mt-2">Admin Panel</h5>
        </div>
        <nav class="sidebar-nav">
          <button (click)="activeTab = 'messages'" [class.active]="activeTab === 'messages'">
            <i class="fas fa-envelope me-2"></i> Messages
            <span *ngIf="unreadCount > 0" class="badge bg-primary ms-auto">{{ unreadCount }}</span>
          </button>
          <button (click)="activeTab = 'content'" [class.active]="activeTab === 'content'">
            <i class="fas fa-edit me-2"></i> Contenu Dynamique
          </button>
          <div class="mt-auto p-3">
             <button (click)="logout()" class="btn btn-outline-danger w-100">
               <i class="fas fa-sign-out-alt me-2"></i> Déconnexion
             </button>
          </div>
        </nav>
      </div>

      <main class="content-area p-4 p-lg-5">
        <header class="d-flex justify-content-between align-items-center mb-5">
          <div class="header-title">
            <h2 class="fw-bold m-0 text-dark">{{ activeTab === 'messages' ? 'Gestion des Demandes' : 'Gestion du Contenu' }}</h2>
            <p class="small text-muted m-0">Consultez et gérez les interactions avec vos utilisateurs</p>
          </div>
          <div class="user-profile small fw-bold text-end">
             Connecté en tant que: <span class="text-primary d-block">{{ adminUser }}</span>
             <span class="badge bg-light text-primary border mt-1">Administrateur</span>
          </div>
        </header>

        <!-- Tab Content: Messages -->
        <div *ngIf="activeTab === 'messages'" class="animate-fade-in">
           <div class="card border-0 shadow-sm rounded-4 overflow-hidden">
             <div class="table-responsive">
               <table class="table mb-0 align-middle">
                 <thead class="bg-light">
                   <tr>
                     <th class="ps-4">Date</th>
                     <th>Expéditeur</th>
                     <th>Contact / Entreprise</th>
                     <th>Sujet</th>
                     <th class="text-center">Action</th>
                   </tr>
                 </thead>
                 <tbody>
                   <tr *ngFor="let req of requests" [class.bg-unread]="!req.read">
                     <td class="ps-4 small text-muted">{{ req.createdAt | date:'short' }}</td>
                     <td>
                        <div class="fw-bold">{{ req.name }}</div>
                     </td>
                     <td>
                        <div class="small fw-bold text-primary">{{ req.email }}</div>
                        <div class="small text-muted">{{ req.phone }} | {{ req.company }}</div>
                     </td>
                     <td>
                        <span class="badge bg-light text-dark mb-1">{{ req.service }}</span>
                        <div class="message-text" [title]="req.message">{{ req.message }}</div>
                     </td>
                     <td class="text-center">
                        <div class="d-flex justify-content-center gap-2">
                           <button *ngIf="!req.read" (click)="markAsRead(req.id)" class="btn btn-outline-primary btn-sm rounded-circle">
                             <i class="fas fa-check"></i>
                           </button>
                           <button (click)="deleteRequest(req.id)" class="btn btn-outline-danger btn-sm rounded-circle">
                             <i class="fas fa-trash"></i>
                           </button>
                        </div>
                     </td>
                   </tr>
                   <tr *ngIf="requests.length === 0">
                     <td colspan="5" class="py-5 text-center text-muted italic">Aucun message pour le moment.</td>
                   </tr>
                 </tbody>
               </table>
             </div>
           </div>
        </div>

        <!-- Tab Content: Content -->
        <div *ngIf="activeTab === 'content'" class="animate-fade-in">
           <app-admin-posts></app-admin-posts>
        </div>
      </main>
    </div>
  `,
  styles: [`
    .dashboard-wrapper { display: flex; min-height: 100vh; background: #f8fafc; padding-top: 90px; }
    .sidebar { width: 280px; background: white; display: flex; flex-direction: column; border-right: 1px solid #e2e8f0; }
    .sidebar-brand img { height: 40px; border-radius: 8px; }
    .sidebar-nav { display: flex; flex-direction: column; flex-grow: 1; gap: 4px; padding: 10px; }
    .sidebar-nav button {
      border: none; background: none; padding: 12px 20px; text-align: left; border-radius: 10px;
      color: #64748b; font-weight: 600; transition: all 0.2s; display: flex; align-items: center;
    }
    .sidebar-nav button:hover { background: #f1f5f9; color: #1e3a8a; }
    .sidebar-nav button.active { background: #eff6ff; color: #3b82f6; }
    .content-area { flex-grow: 1; }
    .message-text { max-width: 250px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; font-size: 0.85rem; }
    .bg-unread { background: #f0f9ff !important; border-left: 4px solid #3b82f6 !important; }
    .animate-fade-in { animation: fadeIn 0.4s ease; }
    @keyframes fadeIn { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }

    @media (max-width: 991px) {
      .sidebar { width: 80px; }
      .sidebar h5, .sidebar span, .sidebar-nav button span { display: none; }
      .sidebar-brand { padding: 20px 0 !important; text-align: center; }
      .content-area { padding: 20px !important; }
    }
  `]
})
export class AdminDashboardComponent implements OnInit {
  requests: ContactRequest[] = [];
  activeTab = 'messages';

  constructor(private adminService: AdminService, private authService: AuthService) { }

  ngOnInit() { this.load(); }

  load() {
    this.adminService.getRequests().subscribe({
      next: (data) => this.requests = data,
      error: (err) => console.error('Error loading requests:', err)
    });
  }

  get adminUser() { return sessionStorage.getItem('admin_user') || 'Admin'; }

  get unreadCount() { return this.requests.filter(r => !r.read).length; }

  markAsRead(id: number) { this.adminService.markAsRead(id).subscribe(() => this.load()); }

  deleteRequest(id: number) {
    if (confirm('Supprimer définitivement ce message ?')) {
      this.adminService.deleteRequest(id).subscribe(() => this.load());
    }
  }

  logout() { this.authService.logout(); }
}
