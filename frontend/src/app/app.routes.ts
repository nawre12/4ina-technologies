import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { EventsComponent } from './components/posts/events/events.component';
import { BlogComponent } from './components/posts/blog/blog.component';

/**
 * Ce fichier définit toutes les "routes" (pages) de votre application.
 * Chaque chemin (path) correspond à un composant spécifique.
 */
export const routes: Routes = [
    { path: '', component: HomeComponent }, // Page d'accueil
    { path: 'about', component: AboutComponent }, // Page À propos
    { path: 'services', loadComponent: () => import('./pages/coming-soon/coming-soon.component').then(m => m.ComingSoonComponent) },
    { path: 'posts/events', component: EventsComponent }, // Page des événements
    { path: 'posts/blog', component: BlogComponent }, // Page du blog

    // Solutions : ces pages sont chargées uniquement quand on y accède (optimisation)
    { path: 'solutions/hardware', loadComponent: () => import('./components/solutions/hardware/hardware.component').then(m => m.HardwareComponent) },
    { path: 'solutions/software', loadComponent: () => import('./components/solutions/software/software.component').then(m => m.SoftwareComponent) },
    { path: 'solutions/oilapp', loadComponent: () => import('./components/solutions/oilapp/oilapp.component').then(m => m.OilappComponent) },

    { path: 'book-demo', loadComponent: () => import('./pages/book-demo/book-demo.component').then(m => m.BookDemoComponent) },
    { path: 'platform', loadComponent: () => import('./pages/platform-coming-soon/platform-coming-soon.component').then(m => m.PlatformComingSoonComponent) },
    { path: 'login', loadComponent: () => import('./pages/admin-login/admin-login.component').then(m => m.AdminLoginComponent) },
    { path: 'admin/login', redirectTo: 'login' },
    {
        path: 'admin',
        loadComponent: () => import('./pages/admin-dashboard/admin-dashboard.component').then(m => m.AdminDashboardComponent),
        canActivate: [() => import('./guards/auth.guard').then(m => m.AuthGuard)]
    },

    // Si l'utilisateur tape une URL inexistante, on le redirige vers l'accueil
    { path: '**', redirectTo: '' }
];
