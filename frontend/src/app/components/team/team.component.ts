import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-team',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './team.component.html',
  styleUrl: './team.component.css'
})
export class TeamComponent {
  founders = [
    { name: 'Hinda Zribi', role: 'Co-Founder', image: 'assets/hinda-zribi.png', linkedin: 'https://www.linkedin.com/in/hinda-zribi-258555140/' },
    { name: 'Sabri Mhimdi', role: 'Co-Founder', image: 'assets/sabri-mhimdi.png', linkedin: 'https://www.linkedin.com/in/sabri-mhimdi-aa636260/' }
  ];

  departments = [
    'Electrical Department',
    'IT Department',
    'Marketing & HR Department'
  ];

  subTeams = [
    'Embedded Systems', 'Web & Mobile Development', 'Human Resources (HR)',
    'Artificial Intelligence', 'Digital Marketing'
  ];
}
