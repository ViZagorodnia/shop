import { Component, ViewChild, ElementRef, AfterViewInit, OnDestroy, OnInit, Inject } from '@angular/core'
import { DOCUMENT } from '@angular/common'

import { CommonModule } from '@angular/common'
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'
import { CartModule } from './cart/cart.module'
import { ProductsModule } from './products/products.module'
import { SharedModule } from './shared/shared.module'
import { OrdersModule } from './orders/orders.module'
import { AdminModule } from './admin/admin.module'
import { Router, RouterModule } from '@angular/router'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { AuthService } from './core'
import { Subject, takeUntil, merge, tap } from 'rxjs'
import { CartPromiseService } from './cart/services/cart-promise.service'
// @ngrx
import { Store } from '@ngrx/store';
import {
  AppState,
  selectQueryParams,
  selectRouteParams,
  selectRouteData,
  selectUrl
} from './core/@ngrx';


@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
  imports: [CartModule, CommonModule, FontAwesomeModule, ProductsModule, SharedModule, OrdersModule, AdminModule, RouterModule]
})
export class AppComponent implements AfterViewInit, OnDestroy, OnInit {
  itemsQuantity$!: Promise<number>
  faCart = faCartShopping
  isAdmin: boolean = false

  private unsubscribe: Subject<void> = new Subject()

  @ViewChild('appTitle')
  title!: ElementRef<HTMLHeadingElement>

  constructor(
    private cartPromiseService: CartPromiseService,
    public authService: AuthService,
    private store: Store,
    private router: Router,
    @Inject(DOCUMENT) private document: any) {
  }
  ngOnInit() {
    this.itemsQuantity$ = this.cartPromiseService.getTotalQuantity()

    // Router Selectors Demo
    const url$ = this.store.select(selectUrl);
    const queryParams$ = this.store.select(selectQueryParams);
    const routeParams$ = this.store.select(selectRouteParams);
    const routeData$ = this.store.select(selectRouteData);
    const source$ = merge(url$, queryParams$, routeParams$, routeData$);
    source$.pipe(tap(val => console.log(val))).subscribe();

  }

  ngOnDestroy(): void {
    this.unsubscribe.complete()
  }

  ngAfterViewInit() {
    this.title.nativeElement.innerText = 'Apple store'
  }

  onLogin(): void {
    const observer = {
      next: () => {
        if(this.authService.isLoggedIn) {
          const redirect = this.authService.redirectUrl ? this.authService.redirectUrl : '/admin'
          this.router.navigate([redirect])
        }
      },
      error: (err: any) => console.log(err),
      complete: () => console.log('[takeUntil] complete')
    }
    this.authService.login(this.isAdmin)
      .pipe(takeUntil(this.unsubscribe))
      .subscribe(observer)
  }

  switchRole() {
    this.isAdmin = !this.isAdmin
  }

  onLogout() {
    this.authService.logout()
  }

}

