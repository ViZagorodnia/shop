import { Component, AfterContentChecked, ViewChild, ElementRef, AfterViewInit, OnDestroy } from '@angular/core'
import { CartService } from './cart/services/cart.service'

import { CommonModule } from '@angular/common'
import { HttpClientModule } from '@angular/common/http'
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'
import { CartModule } from './cart/cart.module'
import { ProductsModule } from './products/products.module'
import { SharedModule } from './shared/shared.module'
import { OrdersModule } from './orders/orders.module'
import { AdminModule } from './admin/admin.module'
import { Router, RouterModule } from '@angular/router'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { AuthService } from './core/services/auth.service'
import { Subject, takeUntil } from 'rxjs'

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
  imports: [CartModule, CommonModule, FontAwesomeModule, HttpClientModule, ProductsModule, SharedModule, OrdersModule, AdminModule, RouterModule]
})
export class AppComponent implements AfterContentChecked, AfterViewInit, OnDestroy {
  itemsQuantity: number = 0
  faCart = faCartShopping

  private unsubscribe: Subject<void> = new Subject()

  @ViewChild('appTitle')
  title!: ElementRef<HTMLHeadingElement>

  constructor(private cartService: CartService, public authService: AuthService, private router: Router) {
  }

  ngOnDestroy(): void {
    this.unsubscribe.complete()
  }

  ngAfterContentChecked() {
    this.itemsQuantity = this.cartService.getTotalQuantity()
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
    this.authService.login()
      .pipe(takeUntil(this.unsubscribe))
      .subscribe(observer)
  }

  onLogout() {
    this.authService.logout()
  }

}

