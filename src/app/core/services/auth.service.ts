import { Injectable } from '@angular/core';
import { delay, Observable, of, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isLoggedIn: boolean = false
  isAdmin: boolean = false

  // store the URL so we can redirect after logging in
  redirectUrl!: string;

  login(isAdmin: boolean = false): Observable<boolean> {
    return of(true).pipe(
      delay(1000),
      tap(value => {
        this.isAdmin = isAdmin
        this.isLoggedIn = value
      })
    )
  }

  logout() {
    this.isAdmin = false
    this.isLoggedIn = false
  }
}
