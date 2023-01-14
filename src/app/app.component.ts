import { Component, AfterContentChecked, ViewChild, ElementRef, AfterViewInit } from '@angular/core'
import { CartService } from './cart/services/cart.service'

import { CommonModule } from '@angular/common'
import { HttpClientModule } from '@angular/common/http'
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'
import { CartModule } from './cart/cart.module'
import { ProductsModule } from './products/products.module'
import { SharedModule } from './shared/shared.module'

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
  imports: [CartModule, CommonModule, FontAwesomeModule, HttpClientModule, ProductsModule, SharedModule]
})
export class AppComponent implements AfterContentChecked, AfterViewInit {
  fullCart: boolean = false

  @ViewChild('appTitle')
  title!: ElementRef<HTMLHeadingElement>

  constructor(private cartService: CartService ) {
  }

  ngAfterContentChecked() {
    this.fullCart = this.cartService.isCartFull()
  }

  ngAfterViewInit() {
    this.title.nativeElement.innerText = 'Apple store'
  }

}

