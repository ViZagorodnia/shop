import { Component, AfterContentChecked } from '@angular/core';
import { CartService } from './cart.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements AfterContentChecked {
  title = 'shop'
  fullCart: boolean = false

  constructor(private cartService: CartService ) {
  }

  ngAfterContentChecked() {
    this.fullCart = this.cartService.isCartFull()
    console.log(this.fullCart);

  }

}
