import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

/**
 * Ce service gère les appels HTTP vers le serveur pour le formulaire de contact.
 */
@Injectable({
    providedIn: 'root'
})
export class ContactService {
    // L'adresse de votre serveur backend
    private apiUrl = 'http://localhost:8081/api/contact';

    constructor(private http: HttpClient) { }

    /**
     * Envoie les données du formulaire au serveur backend.
     */
    sendMessage(data: any): Observable<any> {
        return this.http.post(this.apiUrl, data);
    }
}
