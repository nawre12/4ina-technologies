import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-platform-coming-soon',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="coming-soon-container">
      <div class="text-center animate-up">
        <h1 class="display-3 fw-bold text-dark mb-3">Coming Soon</h1>
        <p class="lead text-muted">Our digital platform is currently under development.</p>
      </div>
    </div>
  `,
  styles: [`
    .coming-soon-container {
      min-height: 80vh;
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: #f8fafc;
    }
    .animate-up {
      animation: fadeInUp 0.8s ease-out forwards;
    }
    @keyframes fadeInUp {
      from { opacity: 0; transform: translateY(20px); }
      to { opacity: 1; transform: translateY(0); }
    }
  `]
})
export class PlatformComingSoonComponent { }
