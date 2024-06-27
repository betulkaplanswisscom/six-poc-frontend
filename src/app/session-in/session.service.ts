import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class SessionService {
  private apiUrl = 'api/session'; // Replace with your actual API URL

  constructor(private http: HttpClient) {}

  checkSession(): Observable<any> {
    return this.http.get(`${this.apiUrl}/check`).pipe(
      tap((response: any) => {
        if (response.lastAccessDate === null) {
          console.error(
            'User has null F_ULT_ACCESO with non-empty sessionTracker'
          );
          // You might want to handle this error case differently
        }
      })
    );
  }

  acceptSession(): Observable<any> {
    return this.http.post(`${this.apiUrl}/accept`, {}).pipe(
      tap(() => {
        // Log the action (you might want to implement a logging service)
        console.log('User accepted the session and accessed the application');
      })
    );
  }

  returnSession(): Observable<any> {
    return this.http.post(`${this.apiUrl}/return`, {}).pipe(
      tap(() => {
        // Log the action
        console.log('User did not access the application');
      })
    );
  }

  updateSessionTracker(): Observable<any> {
    return this.http.post(`${this.apiUrl}/update-tracker`, {});
  }
}
