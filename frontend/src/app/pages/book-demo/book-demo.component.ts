import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ContactService } from '../../services/contact.service';

@Component({
  selector: 'app-book-demo',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  template: `
    <div class="book-demo-page">
      <div class="container">
        <div class="row justify-content-center">
          <!-- Centered Form Column -->
          <div class="col-lg-8 col-xl-6">
            <div class="form-container">
              <div class="form-header mb-5">
                <h1 class="display-5 fw-bold mb-3">Book a Demo</h1>
                <p class="lead text-muted">
                  Let's discuss how our solutions can transform your energy management.
                </p>
              </div>

              <form #demoForm="ngForm" (ngSubmit)="onSubmit(demoForm)" class="row g-4">
                <div class="col-md-6">
                  <div class="form-group-minimal">
                    <label class="form-label-minimal">Full Name</label>
                    <input type="text" name="name" ngModel class="form-input-minimal" placeholder="Your Name" required>
                  </div>
                </div>
                
                <div class="col-md-6">
                  <div class="form-group-minimal">
                    <label class="form-label-minimal">Email Address</label>
                    <input type="email" name="email" ngModel class="form-input-minimal" placeholder="name@company.com" required email>
                  </div>
                </div>

                <div class="col-md-12">
                  <div class="form-group-minimal">
                    <label class="form-label-minimal">Company Name</label>
                    <input type="text" name="company" ngModel class="form-input-minimal" placeholder="Your Company" required>
                  </div>
                </div>

                <div class="col-md-12">
                  <div class="form-group-minimal">
                    <label class="form-label-minimal">Phone Number</label>
                    <input type="tel" name="phone" ngModel class="form-input-minimal" placeholder="+1 (555) 000-0000" required>
                  </div>
                </div>

                <div class="col-md-12">
                  <div class="form-group-minimal">
                    <label class="form-label-minimal">Interested Service</label>
                    <select name="service" ngModel class="form-select-minimal" required>
                      <option value="" disabled selected>Select a service</option>
                      <option *ngFor="let s of services" [value]="s">{{s}}</option>
                    </select>
                  </div>
                </div>

                <div class="col-12">
                  <div class="form-group-minimal">
                    <label class="form-label-minimal">How can we help you? (Optional)</label>
                    <textarea name="message" ngModel class="form-input-minimal" placeholder="Tell us about your needs..." rows="4"></textarea>
                  </div>
                </div>

                <div class="col-12 mt-5">
                  <button type="submit" [disabled]="!demoForm.valid" class="btn-primary-minimal w-100">
                    Schedule Demo Request
                  </button>
                </div>

                <div class="col-12 text-center mt-4">
                  <a routerLink="/" class="text-decoration-none text-muted small hover-primary">
                    <i class="fas fa-long-arrow-alt-left me-2"></i> Return to home page
                  </a>
                </div>

                <!-- Success Message -->
                <div *ngIf="submitted" class="col-12 mt-4 text-center zoom-in">
                  <div class="success-box p-3 rounded-4">
                    <i class="fas fa-check-circle text-success me-2"></i> 
                    <strong>Great!</strong> We've received your request.
                  </div>
                </div>

                <!-- Error Message -->
                <div *ngIf="errorMessage" class="col-12 mt-4 text-center">
                  <div class="alert alert-danger">
                    {{ errorMessage }}
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .book-demo-page {
      min-height: 100vh;
      background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
      padding: 4rem 0;
      display: flex;
      align-items: center;
    }

    .form-container {
      background: white;
      padding: 3rem;
      border-radius: 20px;
      box-shadow: 0 10px 40px rgba(0, 0, 0, 0.1);
    }

    .form-group-minimal {
      margin-bottom: 0;
    }

    .form-label-minimal {
      display: block;
      margin-bottom: 0.5rem;
      font-weight: 600;
      color: #1e293b;
      font-size: 0.9rem;
    }

    .form-input-minimal,
    .form-select-minimal {
      width: 100%;
      padding: 0.875rem 1rem;
      border: 2px solid #e2e8f0;
      border-radius: 12px;
      font-size: 1rem;
      transition: all 0.3s ease;
      background: white;
    }

    .form-input-minimal:focus,
    .form-select-minimal:focus {
      outline: none;
      border-color: #3b82f6;
      box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
    }

    .btn-primary-minimal {
      padding: 1rem 2rem;
      background: linear-gradient(135deg, #3b82f6 0%, #1e3a8a 100%);
      color: white;
      border: none;
      border-radius: 12px;
      font-weight: 600;
      font-size: 1.1rem;
      cursor: pointer;
      transition: all 0.3s ease;
    }

    .btn-primary-minimal:hover:not(:disabled) {
      transform: translateY(-2px);
      box-shadow: 0 10px 25px rgba(59, 130, 246, 0.3);
    }

    .btn-primary-minimal:disabled {
      opacity: 0.6;
      cursor: not-allowed;
    }

    .success-box {
      background: #d1fae5;
      color: #065f46;
      border: 2px solid #10b981;
    }

    .zoom-in {
      animation: zoomIn 0.3s ease;
    }

    @keyframes zoomIn {
      from {
        opacity: 0;
        transform: scale(0.8);
      }
      to {
        opacity: 1;
        transform: scale(1);
      }
    }

    .hover-primary:hover {
      color: #3b82f6 !important;
    }

    @media (max-width: 768px) {
      .form-container {
        padding: 2rem;
      }
      
      .book-demo-page {
        padding: 2rem 0;
      }
    }
  `]
})
export class BookDemoComponent {
  services = [
    'Energy Management Consulting',
    'Hardware Development (IoT Devices)',
    'Software Development (AI & Analytics)',
    'Technical Support & Maintenance',
    'System Integration',
    'ISO 50001 Certification'
  ];

  submitted = false;
  errorMessage = '';

  constructor(private contactService: ContactService) { }

  onSubmit(form: any) {
    if (form.valid) {
      this.contactService.sendMessage(form.value).subscribe({
        next: (response) => {
          console.log('✅ Demo request sent successfully');
          this.submitted = true;
          this.errorMessage = '';
          setTimeout(() => {
            this.submitted = false;
            form.reset();
          }, 5000);
        },
        error: (error) => {
          console.error('❌ Error sending demo request:', error);
          this.errorMessage = 'Failed to send request. Please try again or contact us directly.';
        }
      });
    }
  }
}
