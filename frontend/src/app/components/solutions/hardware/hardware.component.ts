import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactComponent } from '../../contact/contact.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-hardware',
  standalone: true,
  imports: [CommonModule, ContactComponent, RouterModule],
  template: `
    <div class="hardware-page pt-5">
      <!-- Part 1: Hero Section -->
      <section class="hero-segment py-5 mt-5">
        <div class="container py-5 px-4 fade-in-up">
          <div class="row align-items-center g-5">
            <div class="col-lg-6">
              <div class="badge-premium mb-3">4InA Technologie | Hardware</div>
              <h1 class="display-3 fw-bold text-dark mb-4">
                Industrial IoT Hardware for <span class="text-primary">Real-Time Energy</span> Monitoring & Control
              </h1>
              <p class="lead text-muted mb-5 pe-md-5">
                Smart sensors, gateways, and connected devices designed for industrial and energy applications.
              </p>
              <a routerLink="/book-demo" class="btn btn-premium px-5 py-3 text-decoration-none d-inline-block">
                Request a Demo <i class="fas fa-arrow-right ms-2"></i>
              </a>
            </div>
            <div class="col-lg-6">
              <div class="video-container shadow-2xl rounded-3xl overflow-hidden border-4 border-white position-relative">
                <img src="assets/hero-ai-energy.png" alt="Hardware" class="img-fluid w-100 object-cover" style="min-height: 400px;">
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Part 2: Foundation -->
      <section class="foundation-row bg-light py-120">
        <div class="container px-4">
          <div class="row align-items-center g-5">
            <div class="col-lg-6 order-lg-2">
              <div class="ps-lg-5">
                <h2 class="h1 fw-bold mb-4">The Foundation of Intelligent Energy Management</h2>
                <p class="text-muted mb-5 fs-5">Our hardware forms the fundamental layer of intelligence, transforming physical energy flows into actionable digital insights.</p>
                
                <div class="value-check-list">
                  <div class="check-item mb-4">
                    <div class="check-icon"><i class="fas fa-check"></i></div>
                    <div class="check-text">
                      <h5 class="fw-bold mb-1">Real-time Data Acquisition</h5>
                      <p class="text-muted m-0 small">Capture energy consumption pulses instantly.</p>
                    </div>
                  </div>
                  <div class="check-item mb-4">
                    <div class="check-icon"><i class="fas fa-check"></i></div>
                    <div class="check-text">
                      <h5 class="fw-bold mb-1">High-Precision Measurements</h5>
                      <p class="text-muted m-0 small">Lab-grade accuracy for electrical parameters.</p>
                    </div>
                  </div>
                  <div class="check-item mb-4">
                    <div class="check-icon"><i class="fas fa-check"></i></div>
                    <div class="check-text">
                      <h5 class="fw-bold mb-1">Secure IoT Gateway</h5>
                      <p class="text-muted m-0 small">End-to-end encrypted and reliable communication.</p>
                    </div>
                  </div>
                  <div class="check-item mb-4">
                    <div class="check-icon"><i class="fas fa-check"></i></div>
                    <div class="check-text">
                      <h5 class="fw-bold mb-1">Edge-Ready Decisions</h5>
                      <p class="text-muted m-0 small">Local processing for immediate critical responses.</p>
                    </div>
                  </div>
                  <div class="check-item mb-4">
                    <div class="check-icon"><i class="fas fa-check"></i></div>
                    <div class="check-text">
                      <h5 class="fw-bold mb-1">AI Analytics Optimized</h5>
                      <p class="text-muted m-0 small">Clean data output specifically for machine learning models.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-6 order-lg-1">
              <div class="product-visual-box p-3 bg-white shadow-xl rounded-4">
                <img src="assets/software-intelligent-management.jpg" alt="Industrial IoT Device" class="img-fluid rounded-3 w-100 shadow-sm">
                <div class="visual-label">
                  <span class="dot pulse"></span> Industrial Grade Quality
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Part 3: Core Strengths Grid -->
      <section class="strengths-section py-120">
        <div class="container px-4 text-center mb-5">
          <h2 class="display-5 fw-bold mb-3">Core Strengths</h2>
          <p class="text-muted mx-auto" style="max-width: 600px;">Built for scale, engineered for security, and designed for intelligence.</p>
        </div>
        <div class="container px-4">
          <div class="row g-4">
            <div class="col-md-3">
              <div class="strength-card">
                <div class="icon-circle mb-4 mx-auto bg-primary-soft">
                  <i class="fas fa-robot text-primary"></i>
                </div>
                <h4 class="fw-bold mb-3">AI & IoT Ready</h4>
                <p class="text-muted small">Seamlessly connects to intelligent platforms for data processing.</p>
              </div>
            </div>
            <div class="col-md-3">
              <div class="strength-card">
                <div class="icon-circle mb-4 mx-auto bg-success-soft">
                  <i class="fas fa-project-diagram text-success"></i>
                </div>
                <h4 class="fw-bold mb-3">Modular & Scalable</h4>
                <p class="text-muted small">From single installations to complex multi-site enterprise systems.</p>
              </div>
            </div>
            <div class="col-md-3">
              <div class="strength-card">
                <div class="icon-circle mb-4 mx-auto bg-warning-soft">
                  <i class="fas fa-industry text-warning"></i>
                </div>
                <h4 class="fw-bold mb-3">Industrial-Grade</h4>
                <p class="text-muted small">Built for harsh, energy-intensive and demanding industrial environments.</p>
              </div>
            </div>
            <div class="col-md-3">
              <div class="strength-card">
                <div class="icon-circle mb-4 mx-auto bg-danger-soft">
                  <i class="fas fa-shield-alt text-danger"></i>
                </div>
                <h4 class="fw-bold mb-3">Secure by Design</h4>
                <p class="text-muted small">End-to-end protected and encrypted data transmissions.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Part 4: Sector Performance (Light High-Contrast Version) -->
      <section class="sectors-section bg-white py-120 overflow-hidden position-relative border-top border-bottom border-gray-50">
        <div class="container px-4 position-relative z-1">
          <div class="row align-items-center g-5">
            <div class="col-lg-6 fade-in-up">
              <div class="badge-premium mb-3 bg-blue-50">APPLICATION AREAS</div>
              <h2 class="display-5 fw-bold text-dark mb-4">Where It Performs</h2>
              <p class="text-muted mb-5 fs-5">4InA hardware is engineered to deliver accuracy, stability, and long-term performance in complex industrial environments.</p>
              
              <div class="sector-grid-refined">
                <div class="sector-card-light">
                  <div class="sector-icon-main"><i class="fas fa-factory text-primary"></i></div>
                  <span class="fw-bold text-dark">Industrial Facilities</span>
                </div>
                <div class="sector-card-light">
                  <div class="sector-icon-main"><i class="fas fa-hospital text-primary"></i></div>
                  <span class="fw-bold text-dark">Healthcare & Clinics</span>
                </div>
                <div class="sector-card-light">
                  <div class="sector-icon-main"><i class="fas fa-seedling text-primary"></i></div>
                  <span class="fw-bold text-dark">Agro-Industrial Sites</span>
                </div>
                <div class="sector-card-light">
                  <div class="sector-icon-main"><i class="fas fa-building text-primary"></i></div>
                  <span class="fw-bold text-dark">Commercial Buildings</span>
                </div>
                <div class="sector-card-light full-width">
                  <div class="sector-icon-main"><i class="fas fa-network-wired text-primary"></i></div>
                  <span class="fw-bold text-dark">Multi-site Enterprises</span>
                </div>
              </div>
            </div>
            <div class="col-lg-6 fade-in-up delay-200">
              <div class="field-visual-light rounded-3xl overflow-hidden shadow-2xl border border-gray-100 position-relative">
                <img src="assets/images/solutions/hardware_installation.png" alt="On-site Hardware Deployment" class="img-fluid w-100">
                <div class="visual-label-floating bg-white shadow-lg p-3 rounded-2xl border border-gray-50 d-flex align-items-center gap-3">
                   <div class="bg-primary-soft p-2 rounded-lg d-flex align-items-center justify-content-center" style="width: 40px; height: 40px;">
                      <i class="fas fa-hard-hat text-primary"></i>
                   </div>
                   <div>
                      <div class="fw-bold text-dark small">Expert Installation</div>
                      <div class="text-muted" style="font-size: 0.7rem;">Field-proven reliability</div>
                   </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Final CTA Section -->
      <section class="cta-final py-120">
        <div class="container text-center mb-5">
          <h2 class="h1 fw-bold mb-3">Start monitoring, controlling, and optimizing energy today</h2>
          <p class="text-muted mx-auto" style="max-width: 700px;">Get in touch with our experts to find the right hardware configuration for your industrial needs.</p>
        </div>
        <app-contact></app-contact>
      </section>
    </div>
  `,
  styles: [`
    .py-120 { padding: 120px 0; }
    .bg-light { background-color: #f8fafc !important; }
    .bg-dark { background-color: #0c111d !important; }
    
    /* Premium Badge */
    .badge-premium {
      display: inline-block;
      background: linear-gradient(135deg, rgba(37, 99, 235, 0.1) 0%, rgba(37, 99, 235, 0.05) 100%);
      color: #2563eb;
      padding: 10px 24px;
      border-radius: 100px;
      font-size: 0.85rem;
      font-weight: 700;
      letter-spacing: 1px;
      text-transform: uppercase;
      border: 1px solid rgba(37, 99, 235, 0.1);
    }

    /* Premium Button */
    .btn-premium {
      background: #1e293b;
      color: white;
      border: none;
      border-radius: 100px;
      font-weight: 600;
      transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
      box-shadow: 0 10px 25px -5px rgba(0,0,0,0.1);
    }
    .btn-premium:hover {
      background: #2563eb;
      transform: translateY(-2px);
      box-shadow: 0 20px 30px -10px rgba(37,99,235,0.4);
    }

    /* Video Preview Glassy Look */
    .video-container {
      transition: transform 0.6s cubic-bezier(0.16, 1, 0.3, 1);
      cursor: pointer;
    }
    .video-container:hover {
      transform: scale(1.02) rotate(-1deg);
    }
    .glass-overlay {
      position: absolute;
      inset: 0;
      background: linear-gradient(0deg, rgba(12, 17, 29, 0.4) 0%, transparent 100%);
      display: flex;
      align-items: center;
      justify-content: center;
      z-index: 2;
    }
    .play-inner {
      width: 72px;
      height: 72px;
      background: rgba(255, 255, 255, 0.15);
      backdrop-filter: blur(16px);
      border-radius: 50%;
      border: 2px solid rgba(255, 255, 255, 0.3);
      display: flex;
      align-items: center;
      justify-content: center;
      padding-left: 4px;
      transition: all 0.3s ease;
    }
    .video-container:hover .play-inner {
      transform: scale(1.1);
      background: #2563eb;
      border-color: #2563eb;
    }

    /* Custom Check List */
    .check-item {
      display: flex;
      align-items: flex-start;
      gap: 16px;
    }
    .check-icon {
      width: 28px;
      height: 28px;
      background: rgba(37, 99, 235, 0.1);
      color: #2563eb;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 0.75rem;
      margin-top: 4px;
      flex-shrink: 0;
    }

    /* Product Visual Box */
    .product-visual-box {
      position: relative;
    }
    .visual-label {
      position: absolute;
      bottom: 24px;
      left: 24px;
      background: white;
      padding: 10px 20px;
      border-radius: 12px;
      font-size: 0.9rem;
      font-weight: 600;
      box-shadow: 0 10px 30px rgba(0,0,0,0.1);
      display: flex;
      align-items: center;
      gap: 10px;
    }
    .dot {
      width: 8px;
      height: 8px;
      background: #10b981;
      border-radius: 50%;
    }
    .pulse {
      box-shadow: 0 0 0 rgba(16, 185, 129, 0.4);
      animation: pulse 2s infinite;
    }
    @keyframes pulse {
      0% { box-shadow: 0 0 0 0 rgba(16, 185, 129, 0.7); }
      70% { box-shadow: 0 0 0 10px rgba(16, 185, 129, 0); }
      100% { box-shadow: 0 0 0 0 rgba(16, 185, 129, 0); }
    }

    /* Strength Cards */
    .strength-card {
      padding: 40px 30px;
      background: white;
      border-radius: 24px;
      border: 1px solid #f1f5f9;
      transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
      height: 100%;
    }
    .strength-card:hover {
      transform: translateY(-8px);
      box-shadow: 0 40px 60px -15px rgba(0,0,0,0.08);
      border-color: #2563eb;
    }
    .icon-circle {
      width: 64px;
      height: 64px;
      border-radius: 20px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 1.5rem;
    }
    .bg-primary-soft { background: rgba(37, 99, 235, 0.08); }
    .bg-success-soft { background: rgba(16, 185, 129, 0.08); }
    .bg-warning-soft { background: rgba(245, 158, 11, 0.08); }
    .bg-danger-soft { background: rgba(239, 68, 68, 0.08); }

    .bg-blue-50 { background-color: rgba(37, 99, 235, 0.05) !important; }

    /* Sector Grid Refined */
    .sector-grid-refined {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 20px;
    }
    .sector-card-light {
      background: #ffffff;
      padding: 24px;
      border-radius: 20px;
      border: 1px solid #f1f5f9;
      display: flex;
      align-items: center;
      gap: 16px;
      transition: all 0.3s ease;
      box-shadow: 0 4px 6px -1px rgba(0,0,0,0.02);
    }
    .sector-card-light:hover {
      transform: translateX(10px);
      border-color: #2563eb;
      box-shadow: 0 10px 15px -3px rgba(37, 99, 235, 0.05);
    }
    .sector-icon-main {
      width: 44px;
      height: 44px;
      background-color: #f8fafc;
      border-radius: 12px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 1.2rem;
    }
    .full-width { grid-column: span 2; }

    .field-visual-light {
      position: relative;
    }
    .visual-label-floating {
      position: absolute;
      bottom: 30px;
      right: 30px;
    }

    @media (max-width: 991.98px) {
      .display-3 { font-size: 2.8rem; }
      .py-120 { padding: 80px 0; }
      .sector-grid-refined { grid-template-columns: 1fr; }
      .full-width { grid-column: span 1; }
    }
    /* Utils */
    .shadow-xl { box-shadow: 0 20px 25px -5px rgba(0,0,0,0.1), 0 8px 10px -6px rgba(0,0,0,0.1); }
    .shadow-2xl { box-shadow: 0 25px 50px -12px rgba(0,0,0,0.25); }
    .shadow-3xl { box-shadow: 0 35px 60px -15px rgba(0,0,0,0.4); }
    .rounded-3xl { border-radius: 2rem; }
    .border-white-10 { border-color: rgba(255,255,255,0.1) !important; }

    @media (max-width: 991.98px) {
      .display-3 { font-size: 2.8rem; }
      .py-120 { padding: 80px 0; }
      .tag-item { width: 100%; }
    }
  `]
})
export class HardwareComponent { }
