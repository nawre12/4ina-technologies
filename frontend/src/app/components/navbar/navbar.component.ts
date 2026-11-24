import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  isMenuOpen = false;
  isScrolled = false;

  // Logic for OilApp Overlay
  showOilAppOverlay = false;
  oilAppSafeUrl: SafeResourceUrl;

  constructor(private sanitizer: DomSanitizer) {
    this.oilAppSafeUrl = this.sanitizer.bypassSecurityTrustResourceUrl('https://4inatechnologie.com/oilapp/');
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isScrolled = window.scrollY > 50;
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  openOilApp(event: Event) {
    event.preventDefault(); // Prevent default link behavior
    this.showOilAppOverlay = true;
    document.body.style.overflow = 'hidden'; // Prevent background scrolling
  }

  closeOilApp() {
    this.showOilAppOverlay = false;
    document.body.style.overflow = 'auto'; // Restore scrolling
  }
}
