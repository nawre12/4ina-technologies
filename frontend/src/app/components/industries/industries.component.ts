import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-industries',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './industries.component.html',
  styleUrl: './industries.component.css'
})
export class IndustriesComponent {
  industries = [
    { title: 'Healthcare and Hospitals', icon: 'fa-hospital' },
    { title: 'Manufacturing', icon: 'fa-industry' },
    { title: 'Agriculture and Agri-food', icon: 'fa-wheat' },
    { title: 'Business facilities', icon: 'fa-city' }
  ];
}
