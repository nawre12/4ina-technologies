import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  features: string[];
  color: string;
}

@Component({
  selector: 'app-coming-soon',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <!-- Decorative background elements -->
    <div class="page-background-elements">
      <div class="bg-circle bg-circle-1"></div>
      <div class="bg-circle bg-circle-2"></div>
      <div class="bg-circle bg-circle-3"></div>
    </div>

    <!-- Hero Section -->
    <section class="hero-section text-center">
      <div class="container position-relative z-1">
        <div class="hero-content fade-in">
          <h6 class="text-uppercase tracking-wider text-primary fw-bold mb-3 ls-2">Professional Services</h6>
          <h1 class="display-3 fw-black mb-4">
            Our <span class="text-gradient">Services</span>
          </h1>
          <p class="lead mx-auto mb-5 text-muted max-w-700">
            We're enhancing our service offerings to better serve your needs. 
            Explore our state-of-the-art solutions designed for your success!
          </p>
          <div class="scroll-indicator">
            <div class="mouse-icon">
              <span class="wheel"></span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Services Grid -->
    <section class="services-grid py-6">
      <div class="container">
        <div class="row g-4">
          <div *ngFor="let service of services; let i = index" class="col-md-6 col-lg-4 fade-in-up" [style.animation-delay]="(i * 100) + 'ms'">
            <div class="glass-service-card h-100" [ngStyle]="{'--service-theme-color': service.color}">
              <div class="service-icon-wrapper mb-4">
                <div class="icon-blob" [ngStyle]="{'background-color': service.color + '22'}"></div>
                <i [class]="service.icon + ' fa-2x'" [ngStyle]="{'color': service.color}"></i>
              </div>
              
              <div class="service-content">
                <h3 class="h4 fw-bold mb-3 text-dark">{{service.title}}</h3>
                <p class="text-muted mb-4 line-clamp-3">{{service.description}}</p>
                
                <ul class="feature-list mb-4">
                  <li *ngFor="let feature of service.features" class="feature-item">
                    <span class="check-icon" [ngStyle]="{'color': service.color}">
                      <i class="fas fa-check-circle"></i>
                    </span>
                    <span class="feature-text text-muted">{{feature}}</span>
                  </li>
                </ul>
              </div>


            </div>
          </div>
        </div>
      </div>
    </section>

  `,
  styles: [`
    :host {
      --primary-color: #0d6efd;
      --glass-bg: rgba(255, 255, 255, 0.7);
      --glass-border: rgba(255, 255, 255, 0.4);
      --glass-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.07);
      display: block;
      overflow-x: hidden;
      background-color: #fdfdfd;
      position: relative;
    }

    /* Background decorative elements */
    .page-background-elements {
      position: absolute;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      pointer-events: none;
      z-index: 0;
      overflow: hidden;
    }

    .bg-circle {
      position: absolute;
      border-radius: 50%;
      filter: blur(80px);
      opacity: 0.15;
    }

    .bg-circle-1 {
      width: 40vw;
      height: 40vw;
      background: var(--primary-color);
      top: -10vw;
      right: -10vw;
    }

    .bg-circle-2 {
      width: 30vw;
      height: 30vw;
      background: #20c997;
      bottom: 10vw;
      left: -5vw;
    }

    .bg-circle-3 {
      width: 20vw;
      height: 20vw;
      background: #6f42c1;
      top: 40%;
      right: 15%;
    }

    /* Hero Section */
    .hero-section {
      padding: 100px 0 60px;
      min-height: 60vh;
      display: flex;
      align-items: center;
      background: transparent;
    }

    .text-gradient {
      background: linear-gradient(135deg, #0d6efd, #00d2ff);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }

    .ls-2 { letter-spacing: 2px; }
    .fw-black { font-weight: 900; }
    .max-w-700 { max-width: 700px; }
    .max-w-600 { max-width: 600px; }

    /* Glass Service Card */
    .glass-service-card {
      background: var(--glass-bg);
      backdrop-filter: blur(12px);
      -webkit-backdrop-filter: blur(12px);
      border: 1px solid var(--glass-border);
      border-radius: 24px;
      padding: 2.5rem;
      box-shadow: var(--glass-shadow);
      transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
      display: flex;
      flex-direction: column;
      position: relative;
      overflow: hidden;
    }

    .glass-service-card::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 4px;
      background: var(--service-theme-color);
      opacity: 0.6;
    }

    .glass-service-card:hover {
      transform: translateY(-10px);
      box-shadow: 0 15px 45px rgba(0, 0, 0, 0.1);
      border-color: var(--service-theme-color);
      background: rgba(255, 255, 255, 0.9);
    }

    /* Icon styles */
    .service-icon-wrapper {
      position: relative;
      width: 70px;
      height: 70px;
      display: flex;
      align-items: center;
      justify-content: center;
      z-index: 1;
    }

    .icon-blob {
      position: absolute;
      width: 100%;
      height: 100%;
      border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%;
      animation: blob-bounce 8s infinite ease-in-out;
      z-index: -1;
    }

    @keyframes blob-bounce {
      0%, 100% { border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%; }
      50% { border-radius: 50% 50% 33% 67% / 55% 27% 73% 45%; }
    }

    /* Feature List */
    .feature-list {
      list-style: none;
      padding: 0;
    }

    .feature-item {
      display: flex;
      align-items: center;
      margin-bottom: 0.75rem;
      font-size: 0.95rem;
    }

    .check-icon {
      font-size: 1.1rem;
      margin-right: 12px;
      display: flex;
    }

    /* Status Badge */
    .status-badge {
      font-size: 0.75rem;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.5px;
      color: #6c757d;
      background: #f1f3f5;
      padding: 6px 14px;
      border-radius: 50px;
      display: inline-flex;
      align-items: center;
    }

    .pulse-dot {
      width: 8px;
      height: 8px;
      background-color: var(--primary-color);
      border-radius: 50%;
      margin-right: 8px;
      position: relative;
    }

    .pulse-dot::after {
      content: '';
      position: absolute;
      width: 100%;
      height: 100%;
      background: inherit;
      border-radius: 50%;
      animation: pulse 1.5s infinite;
    }

    @keyframes pulse {
      0% { transform: scale(1); opacity: 1; }
      100% { transform: scale(3); opacity: 0; }
    }




    /* Animations */
    .fade-in {
      animation: fadeIn 1s ease-out forwards;
    }

    .fade-in-up {
      opacity: 0;
      animation: fadeInUp 0.8s ease-out forwards;
    }

    @keyframes fadeIn {
      from { opacity: 0; }
      to { opacity: 1; }
    }

    @keyframes fadeInUp {
      from { opacity: 0; transform: translateY(30px); }
      to { opacity: 1; transform: translateY(0); }
    }

    /* Mouse scroll indicator */
    .scroll-indicator {
      margin-top: 40px;
      display: flex;
      justify-content: center;
    }

    .mouse-icon {
      width: 26px;
      height: 42px;
      border: 2px solid #adb5bd;
      border-radius: 14px;
      position: relative;
    }

    .wheel {
      width: 4px;
      height: 8px;
      background: #0d6efd;
      border-radius: 2px;
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
      top: 8px;
      animation: wheel-scroll 1.6s infinite;
    }

    @keyframes wheel-scroll {
      0% { top: 8px; opacity: 1; }
      100% { top: 24px; opacity: 0; }
    }

    .py-6 { padding-top: 5rem; padding-bottom: 5rem; }

    @media (max-width: 768px) {
      .hero-section { padding: 60px 0 30px; }
      .display-3 { font-size: 2.5rem; }
      .glass-service-card { padding: 1.5rem; }
    }
  `]
})
export class ComingSoonComponent {
  services: Service[] = [
    {
      id: 'technical-support',
      title: 'Technical Support and Maintenance',
      description: 'At 4InA Technologie, we provide prompt, expert assistance to resolve any technical issues, ensuring minimal downtime and uninterrupted operations.',
      icon: 'fas fa-headset',
      color: '#0d6efd',
      features: [
        'On-Demand 24/7 Availability',
        'Certified Expertise Advanced',
        'Tools and Methodology',
        'Specialized Support Team'
      ]
    },
    {
      id: 'hardware-dev',
      title: 'Hardware Development',
      description: 'From concept to production, we create hardware solutions customized to meet your unique energy management requirements.',
      icon: 'fas fa-microchip',
      color: '#20c997',
      features: [
        'Tailored design solutions',
        'Advanced technology integration',
        'AI and IOT capabilities',
        'End-to-end development'
      ]
    },
    {
      id: 'software-dev',
      title: 'Software Development',
      description: 'Custom software solutions designed to streamline your business processes and enhance operational efficiency.',
      icon: 'fas fa-code',
      color: '#6f42c1',
      features: [
        'Custom application development',
        'Web & mobile solutions',
        'Cloud integration',
        'UI/UX design'
      ]
    },
    {
      id: 'energy-consulting',
      title: 'Energy Consulting',
      description: 'Strategic audits and expert guidance to optimize your energy consumption and drive sustainable business growth.',
      icon: 'fas fa-lightbulb',
      color: '#fd7e14',
      features: [
        'Energy audits & analysis',
        'Efficiency roadmaps',
        'Sustainability strategy',
        'Cost reduction planning'
      ]
    },
    {
      id: 'system-integration',
      title: 'System Integration',
      description: 'Seamlessly connecting your hardware and software ecosystems for unified data flow and operational control.',
      icon: 'fas fa-project-diagram',
      color: '#0dcaf0',
      features: [
        'IOT & sensor integration',
        'API & database connectivity',
        'Cross-platform synchronization',
        'Unified dashboard control'
      ]
    },
    {
      id: 'iso-certification',
      title: 'ISO 50001 Certification',
      description: 'Expert support to implement Energy Management Systems (EnMS) and achieve international ISO 50001 certification standards.',
      icon: 'fas fa-award',
      color: '#dc3545',
      features: [
        'Compliance readiness audits',
        'EnMS implementation support',
        'Employee training programs',
        'Certification audit assistance'
      ]
    }
  ];
}
