import { InjectionToken } from '@angular/core';

export const ProductsAPI = new InjectionToken<string>('ProductsAPI', {
  providedIn: 'root',
  factory: () => 'http://localhost:3000/productsList'
});
