import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap, catchError, throwError } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:8081/api/auth';

  constructor(private http: HttpClient, private router: Router) { }

  login(credentials: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/login`, credentials).pipe(
      tap((res: any) => {
        if (res.token) {
          sessionStorage.setItem('auth_token', res.token);
          sessionStorage.setItem('admin_user', res.username);
        }
      }),
      catchError((err: any) => {
        if (err.status === 0) {
          return throwError(() => ({ error: { message: 'ERREUR : Le serveur Java est éteint (Port 8081 non joignable)' } }));
        }
        return throwError(() => err);
      })
    );
  }

  logout() {
    sessionStorage.removeItem('auth_token');
    sessionStorage.removeItem('admin_user');
    this.router.navigate(['/login']);
  }

  isLoggedIn(): boolean {
    return !!sessionStorage.getItem('auth_token');
  }

  getToken() {
    return sessionStorage.getItem('auth_token');
  }
}
