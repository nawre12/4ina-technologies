import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ContactService } from '../../services/contact.service';
import { MapService } from '../../services/map.service';

@Component({
    selector: 'app-contact',
    standalone: true,
    imports: [CommonModule, FormsModule],
    templateUrl: './contact.component.html',
    styleUrl: './contact.component.css'
})
export class ContactComponent {
    formData = {
        name: '',
        email: '',
        phone: '',
        service: '',
        message: ''
    };

    services = [
        'Energy Management Consulting',
        'Hardware Development',
        'Software Development',
        'Technical Support & Maintenance'
    ];

    constructor(
        private contactService: ContactService,
        public mapService: MapService
    ) { }

    onSubmit() {
        this.contactService.sendMessage(this.formData).subscribe({
            next: (response) => {
                alert('Message sent successfully!');
                this.formData = { name: '', email: '', phone: '', service: '', message: '' };
            },
            error: (error) => {
                alert('Failed to send message. Please try again.');
                console.error('Error:', error);
            }
        });
    }
}
