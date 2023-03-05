import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { CartPromiseService } from 'src/app/cart/services/cart-promise.service';

@Injectable({
  providedIn: 'root'
})
export class IsCardEmptyGuard implements CanActivate {
  constructor (private cartPromiseService: CartPromiseService) {

  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      return !this.cartPromiseService.isCartEmpty();
  }
}
