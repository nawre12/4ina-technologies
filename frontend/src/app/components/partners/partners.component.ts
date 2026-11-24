import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-partners',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './partners.component.html',
    styleUrl: './partners.component.css'
})
export class PartnersComponent {
    partnerIntro = "At 4InA Technologie, we believe in the power of collaboration. Together, we leverage our strengths to create cutting-edge solutions that drive success across various sectors.";
}
