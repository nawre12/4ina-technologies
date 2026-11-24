import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroComponent } from '../hero/hero.component';
import { IndustriesComponent } from '../industries/industries.component';
import { SoftwareComponent } from '../software/software.component';
import { ServicesComponent } from '../services/services.component';
import { ContactComponent } from '../contact/contact.component';
import { TeamComponent } from '../team/team.component';
import { FaqComponent } from '../faq/faq.component';

@Component({
    selector: 'app-home',
    standalone: true,
    imports: [
        CommonModule,
        HeroComponent,
        IndustriesComponent,
        SoftwareComponent,
        ServicesComponent,
        ContactComponent,
        TeamComponent,
        FaqComponent
    ],
    templateUrl: './home.component.html',
    styleUrl: './home.component.css'
})
export class HomeComponent { }
