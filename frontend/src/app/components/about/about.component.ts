import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TeamComponent } from '../team/team.component';
import { PartnersComponent } from '../partners/partners.component';

@Component({
    selector: 'app-about',
    standalone: true,
    imports: [CommonModule, TeamComponent, PartnersComponent],
    templateUrl: './about.component.html',
    styleUrl: './about.component.css'
})
export class AboutComponent { }
