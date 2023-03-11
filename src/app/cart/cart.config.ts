import { InjectionToken } from '@angular/core'

export const CartAPI = new InjectionToken<string>('CartAPI', {
  providedIn: 'root',
  factory: () => 'http://localhost:3000/cart'
})
