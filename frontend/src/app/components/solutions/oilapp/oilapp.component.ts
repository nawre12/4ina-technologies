import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ContactComponent } from '../../contact/contact.component';

/**
 * Page pour la solution "OilApp".
 * Code structuré et simple pour les débutants.
 */
@Component({
  selector: 'app-oilapp',
  standalone: true,
  imports: [CommonModule, RouterModule, ContactComponent],
  templateUrl: './oilapp.component.html',
  styleUrl: './oilapp.component.css'
})
export class OilappComponent {

  // Liste des questions pour la section FAQ
  faqs = [
    {
      question: "Who can benefit from OilApp?",
      answer: "Oil mill owners, factory managers, and industrial organizations looking to digitize and automate their operations for better efficiency and control.",
      isOpen: false
    },
    {
      question: "As an oil mill owner, how can my customers benefit from OilApp?",
      answer: "Your customers receive real-time updates on their olive deliveries, oil estimations, and professional digital invoices, leading to better trust and transparency.",
      isOpen: false
    },
    {
      question: "How can I request a demo of OilApp?",
      answer: "Simply use the 'Request Demo' button on this page or fill out the contact form below. Our team will get back to you promptly to schedule a full walkthrough.",
      isOpen: false
    }
  ];

  /** Alterne l'affichage d'une question de la FAQ */
  toggleFaq(index: number) {
    this.faqs[index].isOpen = !this.faqs[index].isOpen;
  }
}
