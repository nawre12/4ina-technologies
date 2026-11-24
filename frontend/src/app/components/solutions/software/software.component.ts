import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactComponent } from '../../contact/contact.component';
import { RouterModule } from '@angular/router';

@Component({
   selector: 'app-software',
   standalone: true,
   imports: [CommonModule, ContactComponent, RouterModule],
   template: `
    <div class="software-page pt-5">
      <!-- Hero Section -->
      <section class="hero-section py-5 mt-5">
        <div class="container py-5 px-4 fade-in-up">
          <div class="row align-items-center g-5">
            <div class="col-lg-6">
              <span class="badge-soft mb-3">AI-Powered Energy Intelligence</span>
              <h1 class="display-3 fw-bold text-dark mb-4">
                Smart Energy: <br><span class="text-primary">From Data to Decisions</span>
              </h1>
              <p class="lead text-muted mb-5 pe-lg-5">
                Smart Energy is the AI-powered energy management software developed by 4InA Technologie. It transforms raw energy data into actionable insights through real-time dashboards, intelligent analytics, and predictive intelligence.
              </p>
              <div class="d-flex gap-3">
                <a routerLink="/book-demo" class="btn-premium px-5 py-3 text-decoration-none">
                  Request a Demo <i class="fas fa-arrow-right ms-2"></i>
                </a>
                <button class="btn btn-outline-dark rounded-pill px-4 fw-bold" (click)="scrollToContact()">
                  View Features
                </button>
              </div>
            </div>
            <div class="col-lg-6">
              <div class="dashboard-visual position-relative">
                <!-- Floating KPI Cards -->
                <div class="floating-kpi kpi-1 bg-white p-3 rounded-3 shadow-lg border">
                  <div class="d-flex align-items-center gap-3">
                    <div class="icon-sq bg-success-subtle text-success"><i class="fas fa-arrow-down"></i></div>
                    <div>
                      <div class="small text-muted fw-bold">Energy Cost</div>
                    </div>
                  </div>
                </div>
                
                <div class="floating-kpi kpi-2 bg-white p-3 rounded-3 shadow-lg border">
                  <div class="d-flex align-items-center gap-3">
                    <div class="icon-sq bg-primary-subtle text-primary"><i class="fas fa-brain"></i></div>
                    <div>
                      <div class="small text-muted fw-bold">AI Optimization</div>
                      <div class="fw-bold text-dark">Active</div>
                    </div>
                  </div>
                </div>
                
                <img src="assets/software-hero-dashboard.jpg" alt="Smart Energy Dashboard" class="img-fluid rounded-4 shadow-xl">
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- What Smart Energy Delivers -->
      <section class="delivery-section py-120 bg-light">
        <div class="container px-4">
          <div class="text-center mb-5 pb-4">
             <h2 class="display-5 fw-bold mb-3">What Smart Energy Delivers</h2>
             <p class="text-muted mx-auto" style="max-width: 600px;">
               More than just a dashboard, Smart Energy is an active engine for operational excellence.
             </p>
          </div>
          
          <div class="row g-4 align-items-center">
             <div class="col-lg-5 text-center text-lg-start">
                <img src="assets/software-intelligent-management.jpg" alt="Smart Energy Services" class="img-fluid rounded-4 shadow-xl mb-4 mb-lg-0 w-100 object-cover" style="height: 400px;">
             </div>
             <div class="col-lg-7">
                <div class="row g-4 ps-lg-5">
                    <div class="col-md-6">
                       <div class="feature-item d-flex gap-3">
                          <div class="icon-box-md bg-white shadow-sm text-primary"><i class="fas fa-chart-line"></i></div>
                          <div>
                             <h5 class="fw-bold mb-1">Real-Time Monitoring</h5>
                             <p class="text-muted small mb-0">Instant visibility across sites and equipment</p>
                          </div>
                       </div>
                    </div>
                    <div class="col-md-6">
                       <div class="feature-item d-flex gap-3">
                          <div class="icon-box-md bg-white shadow-sm text-primary"><i class="fas fa-robot"></i></div>
                          <div>
                             <h5 class="fw-bold mb-1">AI Analytics</h5>
                             <p class="text-muted small mb-0">Detect inefficiencies and optimize consumption</p>
                          </div>
                       </div>
                    </div>
                    <div class="col-md-6">
                       <div class="feature-item d-flex gap-3">
                          <div class="icon-box-md bg-white shadow-sm text-primary"><i class="fas fa-tools"></i></div>
                          <div>
                             <h5 class="fw-bold mb-1">Predictive Maintenance</h5>
                             <p class="text-muted small mb-0">Anticipate failures before they occur</p>
                          </div>
                       </div>
                    </div>
                    <div class="col-md-6">
                       <div class="feature-item d-flex gap-3">
                          <div class="icon-box-md bg-white shadow-sm text-primary"><i class="fas fa-desktop"></i></div>
                          <div>
                             <h5 class="fw-bold mb-1">Customizable Dashboards</h5>
                             <p class="text-muted small mb-0">KPIs adapted to your structure</p>
                          </div>
                       </div>
                    </div>
                    <div class="col-md-12 pt-3">
                       <div class="feature-item d-flex gap-3">
                          <div class="icon-box-md bg-white shadow-sm text-primary"><i class="fas fa-mobile-alt"></i></div>
                          <div>
                             <h5 class="fw-bold mb-1">Web & Mobile Access</h5>
                             <p class="text-muted small mb-0">Secure access anytime, anywhere</p>
                          </div>
                       </div>
                    </div>
                </div>
             </div>
          </div>
        </div>
      </section>
      
      <!-- Core Features Grid -->
      <section class="features-grid py-120">
         <div class="container px-4">
            <div class="row g-4">
               <div class="col-md-4">
                   <div class="minimal-card h-100 p-4 border rounded-4 hover-lift">
                      <div class="mb-4">
                          <i class="fas fa-desktop fs-2 text-primary"></i>
                      </div>
                      <h4 class="fw-bold h5">Customizable Dashboards</h4>
                      <p class="text-muted small">KPIs and views adapted specifically to your organizational structure.</p>
                   </div>
               </div>
               <div class="col-md-4">
                   <div class="minimal-card h-100 p-4 border rounded-4 hover-lift">
                      <div class="mb-4">
                          <i class="fas fa-mobile-alt fs-2 text-primary"></i>
                      </div>
                      <h4 class="fw-bold h5">Web & Mobile Access</h4>
                      <p class="text-muted small">Secure, encrypted access to your energy data anytime, anywhere.</p>
                   </div>
               </div>
               <div class="col-md-4">
                   <div class="minimal-card h-100 p-4 border rounded-4 hover-lift">
                      <div class="mb-4">
                          <i class="fas fa-file-export fs-2 text-primary"></i>
                      </div>
                      <h4 class="fw-bold h5">Automated Reporting</h4>
                      <p class="text-muted small">Generate ESG and cost reports automatically for stakeholders.</p>
                   </div>
               </div>
            </div>
         </div>
      </section>

      <!-- Strategy Roadmap (High Contrast) -->
      <section class="strategy-section py-120 bg-white text-dark position-relative overflow-hidden border-top border-bottom border-gray-50">
         <div class="container px-4 position-relative z-1 text-center">
            <h2 class="display-5 fw-bold mb-5 text-dark">From Data to Decisions</h2>
            
            <div class="roadmap-steps d-flex flex-column flex-md-row justify-content-center align-items-center gap-4 gap-md-5 mt-5">
               
               <div class="step-item fade-in-up">
                  <div class="step-circle light-theme mb-3"><i class="fas fa-database text-primary"></i></div>
                  <h5 class="fw-bold text-dark">Data</h5>
                  <p class="text-muted small">Collection</p>
               </div>
               
               <div class="step-connector d-none d-md-block"><i class="fas fa-chevron-right text-muted opacity-50"></i></div>
               
               <div class="step-item fade-in-up delay-100">
                  <div class="step-circle light-theme mb-3"><i class="fas fa-search-dollar text-primary"></i></div>
                  <h5 class="fw-bold text-dark">Analysis</h5>
                  <p class="text-muted small">Processing</p>
               </div>
               
               <div class="step-connector d-none d-md-block"><i class="fas fa-chevron-right text-muted opacity-50"></i></div>
               
               <div class="step-item fade-in-up delay-200">
                  <div class="step-circle light-theme step-active-light mb-3"><i class="fas fa-lightbulb"></i></div>
                  <h5 class="fw-bold text-primary">Insight</h5>
                  <p class="text-muted small">Intelligence</p>
               </div>
               
               <div class="step-connector d-none d-md-block"><i class="fas fa-chevron-right text-muted opacity-50"></i></div>

               <div class="step-item fade-in-up delay-300">
                  <div class="step-circle light-theme mb-3"><i class="fas fa-rocket text-primary"></i></div>
                  <h5 class="fw-bold text-dark">Action</h5>
                  <p class="text-muted small">Optimization</p>
               </div>
               
            </div>
            
            <div class="mt-5 pt-4">
               <p class="lead text-muted mx-auto" style="max-width: 700px;">
                 Smart Energy empowers technical teams and executives to move from reactive fixes to proactive performance optimization.
               </p>
            </div>
         </div>
      </section>

      <!-- Integration Section -->
      <section class="integration-section py-120">
         <div class="container px-4">
            <div class="text-center mb-5 pb-4">
               <h2 class="display-5 fw-bold mb-3">How to Integrate Smart Energy</h2>
               <p class="text-muted mx-auto" style="max-width: 600px;">
                  Choose the path that fits your existing infrastructure.
               </p>
            </div>

            <div class="row align-items-center g-5">
               <div class="col-lg-6">
                  <div class="row g-4">
                     <div class="col-md-6">
                        <div class="minimal-card p-4 border rounded-4 shadow-sm text-center h-100">
                           <div class="icon-box-md bg-primary-subtle text-primary mx-auto mb-3"><i class="fas fa-microchip"></i></div>
                           <h5 class="fw-bold mb-2">4InA hardware devices</h5>
                           <p class="text-muted small mb-0">Plug-and-play integration with our proprietary IoT sensors.</p>
                        </div>
                     </div>
                     <div class="col-md-6">
                        <div class="minimal-card p-4 border rounded-4 shadow-sm text-center h-100">
                           <div class="icon-box-md bg-success-subtle text-success mx-auto mb-3"><i class="fas fa-network-wired"></i></div>
                           <h5 class="fw-bold mb-2">Existing EMS systems</h5>
                           <p class="text-muted small mb-0">Seamless connectivity with your current energy systems via API.</p>
                        </div>
                     </div>
                  </div>
                  
                  <div class="mt-5 text-center text-lg-start">
                     <a routerLink="/book-demo" class="btn-premium px-5 py-3 text-decoration-none d-inline-block">
                        Request a demo <i class="fas fa-calendar-check ms-2"></i>
                     </a>
                  </div>
               </div>
               <div class="col-lg-6">
                 <div class="visual-wrapper position-relative">
                    <img src="assets/images/solutions/smart_energy_hero_v2.png" alt="Hardware and Software Integration" class="img-fluid rounded-4 shadow-xl">
                    <div class="badge-floating bg-white shadow p-3 rounded-3 d-flex align-items-center gap-2 border position-absolute" style="bottom: -20px; right: 20px;">
                        <span class="dot pulse"></span>
                        <span class="fw-bold small">Real-time Synergy</span>
                    </div>
                  </div>
               </div>
            </div>
         </div>
      </section>

      <!-- Final CTA -->
      <section class="cta-final py-120">
        <div class="container text-center mb-5">
          <h2 class="h1 fw-bold mb-3">Turn energy data into measurable performance</h2>
          <p class="text-muted mx-auto" style="max-width: 700px;">Start your journey towards an AI-optimized energy future today.</p>
        </div>
        <app-contact></app-contact>
      </section>
    </div>
  `,
   styles: [`
    .py-120 { padding: 120px 0; }
    .bg-light { background-color: #f8fafc !important; }
    .bg-dark { background-color: #0c111d !important; }
    .text-white-50 { color: rgba(255, 255, 255, 0.6) !important; }
    
    .badge-soft {
      display: inline-block;
      background: rgba(37, 99, 235, 0.1);
      color: #2563eb;
      padding: 8px 16px;
      border-radius: 50px;
      font-weight: 600;
      font-size: 0.85rem;
    }

    .btn-premium {
      background: #1e293b;
      color: white;
      border: none;
      border-radius: 100px;
      font-weight: 600;
      transition: all 0.3s;
      box-shadow: 0 10px 20px -5px rgba(0,0,0,0.1);
    }
    .btn-premium:hover {
      background: #2563eb;
      transform: translateY(-2px);
      box-shadow: 0 15px 25px -5px rgba(37,99,235,0.3);
    }
    
    .hover-lift { transition: transform 0.3s cubic-bezier(0.165, 0.84, 0.44, 1); }
    .hover-lift:hover { transform: translateY(-5px); }

    /* Dashboard Visual */
    .dashboard-visual {
       padding: 20px;
    }
    .blob-bg {
       position: absolute;
       top: -20%;
       right: -20%;
       width: 120%;
       height: 120%;
       background: radial-gradient(circle, rgba(37, 99, 235, 0.08) 0%, rgba(255, 255, 255, 0) 70%);
       z-index: 0;
    }
    .shadow-3xl { box-shadow: 0 35px 60px -15px rgba(0,0,0,0.3); }
    .border-white-10 { border-color: rgba(255,255,255,0.2) !important; }
    
    .floating-kpi {
       position: absolute;
       min-width: 180px;
       z-index: 2;
       animation: float 6s ease-in-out infinite;
    }
    .kpi-1 { top: 10%; left: -5%; }
    .kpi-2 { bottom: 15%; right: -5%; animation-delay: 2s; }
    
    .icon-sq {
       width: 48px;
       height: 48px;
       border-radius: 12px;
       display: flex;
       align-items: center;
       justify-content: center;
       font-size: 1.25rem;
    }
    
    @keyframes float {
       0%, 100% { transform: translateY(0); }
       50% { transform: translateY(-15px); }
    }

    /* Roadmap */
    .step-circle {
       width: 80px;
       height: 80px;
       background: rgba(255,255,255,0.05);
       border: 1px solid rgba(255,255,255,0.1);
       border-radius: 50%;
       display: flex;
       align-items: center;
       justify-content: center;
       font-size: 2rem;
       color: white;
       margin: 0 auto;
       transition: all 0.3s;
    }
    .light-theme {
       background: #ffffff;
       border: 1px solid #e2e8f0;
       color: #2563eb;
       box-shadow: 0 4px 6px -1px rgba(0,0,0,0.05);
    }
    .step-active {
       background: rgba(37, 99, 235, 0.2);
       border-color: #2563eb;
       color: #60a5fa;
       box-shadow: 0 0 30px rgba(37, 99, 235, 0.3);
    }
    .step-active-light {
       background: #eff6ff;
       border-color: #2563eb;
       color: #2563eb;
       box-shadow: 0 10px 15px -3px rgba(37, 99, 235, 0.15);
    }
    .step-item:hover .step-circle {
       transform: scale(1.1);
       border-color: #2563eb;
    }
    
    /* Integration Orbit */
    .integration-visual {
       animation: spin-slow 60s linear infinite;
    }
    .orbit-item {
       transition: transform 0.3s;
    }
    .orbit-item:hover {
       transform: scale(1.2) !important;
    }
    
    .icon-box-md {
       width: 50px;
       height: 50px;
       border-radius: 12px;
       display: flex;
       align-items: center;
       justify-content: center;
       flex-shrink: 0;
       font-size: 1.25rem;
    }

    /* Responsive */
    @media (max-width: 991.98px) {
       .display-3 { font-size: 2.5rem; }
       .py-120 { padding: 80px 0; }
       .kpi-1 { left: 0; top: -20px; }
       .kpi-2 { right: 0; bottom: -20px; }
       .integration-visual { margin-top: 40px; transform: scale(0.8); }
    }
  `]
})
export class SoftwareComponent {
   scrollToContact() {
      const contactSection = document.querySelector('app-contact');
      if (contactSection) {
         contactSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
   }
}
