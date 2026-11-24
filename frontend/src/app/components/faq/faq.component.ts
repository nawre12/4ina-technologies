import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface FaqItem {
  question: string;
  answer: string;
  isOpen: boolean;
}

@Component({
  selector: 'app-faq',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './faq.component.html',
  styleUrl: './faq.component.css'
})
export class FaqComponent {
  faqs: FaqItem[] = [
    {
      question: "What is 4InA Technologie's core mission?",
      answer: "Our mission is to empower industries with smart, AI-driven energy management solutions that optimize consumption, reduce costs, and promote sustainability through cutting-edge IoT technology.",
      isOpen: false
    },
    {
      question: "How does the AI predictive system help in energy saving?",
      answer: "Our AI platform analyzes real-time data from smart sensors to identify patterns and predict future energy needs. This allows for proactive adjustments, preventing waste and ensuring peak efficiency.",
      isOpen: false
    },
    {
      question: "Which sectors do you specialize in?",
      answer: "We offer specialized solutions for Manufacturing, Agriculture (Agri-food), Healthcare, Hospitality, and Business Facilities, tailoring our tech to meet specific industry 4.0 standards.",
      isOpen: false
    },
    {
      question: "Do you provide custom hardware development?",
      answer: "Yes! We have specialized expertise in electronics and hardware development, creating bespoke smart sensors and monitoring units tailored to your unique operational requirements.",
      isOpen: false
    },
    {
      question: "How can I request a demo or a quote?",
      answer: "You can easily request a demo or quote through our 'Contact Us' section by filling out the form, or by reaching out to us directly via email at contact@4inatechnologie.com.",
      isOpen: false
    }
  ];

  toggleFaq(index: number) {
    this.faqs[index].isOpen = !this.faqs[index].isOpen;
  }
}
