import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-admin-login',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  template: `
    <div class="login-container">
      <div class="login-card">
        <div class="text-center mb-4">
          <img src="assets/logo.jpg" alt="4InA" class="logo-img mb-3">
          <h2 class="fw-bold">Administration 4InA</h2>
          <p class="text-muted">Connectez-vous pour gérer votre site</p>
        </div>

        <form (ngSubmit)="onSubmit()" #loginForm="ngForm">
          <div class="mb-3">
            <label class="form-label">Nom d'utilisateur</label>
            <input type="text" [(ngModel)]="credentials.username" name="username" class="form-control" required placeholder="Ex: votre_nom" autofocus>
          </div>
          <div class="mb-4">
            <label class="form-label">Mot de passe</label>
            <input type="password" [(ngModel)]="credentials.password" name="password" class="form-control" required placeholder="Votre mot de passe">
          </div>

          <div *ngIf="errorMessage" class="alert alert-danger py-2 small mb-4">
            {{ errorMessage }}
          </div>

          <button type="submit" class="btn btn-primary w-100 py-2 fw-bold" [disabled]="!loginForm.valid || loading">
            {{ loading ? 'Connexion...' : 'Se connecter' }}
          </button>
        </form>

        <div class="mt-4 text-center">
          <a routerLink="/" class="text-decoration-none text-muted small">
            <i class="fas fa-arrow-left me-1"></i> Retour au site
          </a>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .login-container {
      min-height: 100vh;
      display: flex;
      align-items: center;
      justify-content: center;
      background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%);
      padding: 100px 20px 40px; /* Added padding-top: 100px and adjusted other paddings */
    }
    .login-card {
      background: white;
      padding: 3rem;
      border-radius: 20px;
      box-shadow: 0 10px 40px rgba(0,0,0,0.05);
      width: 100%;
      max-width: 450px;
    }
    .logo-img {
      height: 60px;
      border-radius: 10px;
    }
    .btn-primary {
      background: #1e3a8a;
      border: none;
      border-radius: 10px;
    }
    .form-control {
      padding: 0.75rem 1rem;
      border-radius: 10px;
      border: 1px solid #e2e8f0;
    }
  `]
})
export class AdminLoginComponent {
  credentials = { username: '', password: '' };
  loading = false;
  errorMessage = '';

  constructor(private authService: AuthService, private router: Router) { }

  onSubmit() {
    this.loading = true;
    this.errorMessage = '';
    this.authService.login(this.credentials).subscribe({
      next: () => this.router.navigate(['/admin']),
      error: (err) => {
        this.errorMessage = (err.error?.message || 'Impossible de contacter le serveur. Vérifiez qu\'il est allumé sur le port 8081.');
        this.loading = false;
        console.error('Login error details:', err);
      }
    });
  }
}
