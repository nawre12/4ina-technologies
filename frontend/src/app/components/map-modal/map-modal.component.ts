import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DomSanitizer } from '@angular/platform-browser';
import { MapService } from '../../services/map.service';

@Component({
  selector: 'app-map-modal',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="map-overlay" *ngIf="mapService.isOpen()" (click)="mapService.closeMap()">
      <div class="map-container fade-in-scale" (click)="$event.stopPropagation()">
        <button class="close-btn" (click)="mapService.closeMap()">
          <i class="fas fa-times"></i>
        </button>
        <div class="map-header p-3 bg-white border-bottom d-flex align-items-center justify-content-between">
           <div class="d-flex align-items-center gap-3">
              <div class="icon-sq bg-primary-subtle text-primary"><i class="fas fa-map-marker-alt"></i></div>
              <div>
                 <h6 class="fw-bold mb-0">Our Location</h6>
                 <p class="text-muted small mb-0">Technopark Mannouba, Tunisia</p>
              </div>
           </div>
        </div>
        <iframe 
          [src]="safeUrl" 
          width="100%" 
          height="100%" 
          style="border:0;" 
          allowfullscreen="" 
          loading="lazy" 
          referrerpolicy="no-referrer-when-downgrade">
        </iframe>
      </div>
    </div>
  `,
  styles: [`
    .map-overlay {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba(12, 17, 29, 0.85);
      backdrop-filter: blur(8px);
      z-index: 10000;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 20px;
    }
    .map-container {
      position: relative;
      width: 100%;
      max-width: 1000px;
      height: 80vh;
      background: white;
      border-radius: 20px;
      overflow: hidden;
      box-shadow: 0 40px 100px -20px rgba(0,0,0,0.5);
      display: flex;
      flex-direction: column;
    }
    .close-btn {
      position: absolute;
      top: 15px;
      right: 15px;
      width: 40px;
      height: 40px;
      border-radius: 12px;
      background: #f1f5f9;
      border: none;
      display: flex;
      align-items: center;
      justify-content: center;
      color: #0f172a;
      transition: all 0.3s;
      z-index: 10;
    }
    .close-btn:hover {
      background: #ef4444;
      color: white;
      transform: rotate(90deg);
    }
    .icon-sq {
      width: 38px;
      height: 38px;
      border-radius: 10px;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .bg-primary-subtle { background: rgba(37, 99, 235, 0.1); }
    
    .fade-in-scale {
      animation: fadeInScale 0.4s cubic-bezier(0.16, 1, 0.3, 1);
    }
    @keyframes fadeInScale {
      from { opacity: 0; transform: scale(0.95) translateY(20px); }
      to { opacity: 1; transform: scale(1) translateY(0); }
    }
    @media (max-width: 768px) {
      .map-container { height: 90vh; }
    }
  `]
})
export class MapModalComponent {
  mapService = inject(MapService);
  private sanitizer = inject(DomSanitizer);

  // Exact location of Technopark Manouba
  safeUrl = this.sanitizer.bypassSecurityTrustResourceUrl(
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3194.279611603588!2d10.058348776632731!3d36.81222476722839!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12fd3230635f799d%3A0xe54c1be27546872a!2sP%C3%B4le%20Technologique%20de%20la%20Manouba%20(Technopark%20Manouba)!5e0!3m2!1sen!2stn!4v1716947200000!5m2!1sen!2stn'
  );
}
