import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-software',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './software.component.html',
  styleUrl: './software.component.css'
})
export class SoftwareComponent { }
