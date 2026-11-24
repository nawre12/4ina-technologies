import { Injectable, signal } from '@angular/core';

/**
 * Ce service gère l'état d'ouverture de la carte (Google Maps).
 */
@Injectable({
    providedIn: 'root'
})
export class MapService {
    // Variable pour savoir si la carte est affichée
    isOpen = signal(false);

    /** Affiche la carte et empêche le reste de la page de défiler */
    openMap() {
        this.isOpen.set(true);
        document.body.style.overflow = 'hidden';
    }

    /** Cache la carte et réactive le défilement de la page */
    closeMap() {
        this.isOpen.set(false);
        document.body.style.overflow = 'auto';
    }
}
