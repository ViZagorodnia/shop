import { Injectable } from '@angular/core';
import { Observable, of, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isLoggedIn: boolean = false
  isAdmin: boolean = false

  // store the URL so we can redirect after logging in
  redirectUrl!: string;

  login(isAdmin: boolean = false): Observable<boolean> {
    if(isAdmin) {
      return of(true).pipe(
        tap(value => {
          this.isAdmin = isAdmin
          this.isLoggedIn = value
          console.log(this.isAdmin, ' - admin')
          console.log(this.isLoggedIn, '- loggin')
        })
      )
    }
    return of(false)
  }

  logout() {
    this.isAdmin = false
    this.isLoggedIn = false
  }
}
