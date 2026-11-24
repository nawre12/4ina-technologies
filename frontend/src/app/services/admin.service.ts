import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface ContactRequest {
    id: number;
    name: string;
    email: string;
    phone: string;
    company: string;
    service: string;
    message: string;
    createdAt: string;
    read: boolean;
}

@Injectable({
    providedIn: 'root'
})
export class AdminService {
    private apiUrl = 'http://localhost:8081/api/admin';

    constructor(private http: HttpClient) { }

    getRequests(): Observable<ContactRequest[]> {
        return this.http.get<ContactRequest[]>(`${this.apiUrl}/requests`);
    }

    markAsRead(id: number): Observable<any> {
        return this.http.put(`${this.apiUrl}/requests/${id}/read`, {});
    }

    deleteRequest(id: number): Observable<any> {
        return this.http.delete(`${this.apiUrl}/requests/${id}`);
    }
}
