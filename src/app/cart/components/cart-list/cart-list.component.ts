import { Component, AfterContentChecked, OnInit } from '@angular/core'
import { CartService } from '../../services/cart.service'
import { faTrash, faUpLong, faDownLong } from '@fortawesome/free-solid-svg-icons'
import { CartItemModel } from '../../models/cart-model'

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.sass']
})
export class CartListComponent implements OnInit, AfterContentChecked {
  items: Array<CartItemModel> = []
  totalQuantity: number = 0
  totalCost: number = 0
  faTrash = faTrash
  faUp = faUpLong
  faDown = faDownLong
  selectedFilter: string = 'name'
  order: boolean = true

  constructor(private cartService: CartService) {
   }

  ngOnInit(): void {
    this.items = this.cartService.getItems()
  }

  ngAfterContentChecked(): void {
    this.totalCost = this.cartService.getTotalCost()
    this.totalQuantity = this.cartService.getTotalQuantity()
  }

  trackByItems(index: number, item: any): number { return item.id }

  onClearCart(): void {
    this.cartService.onClearCart()
  }

  onDeleteItem(item: CartItemModel) {
    this.cartService.onDeleteItem(item)
  }

  onQuantityDecrease(item: CartItemModel) {
    this.cartService.onQuantityDecrease(item)
  }

  onQuantityIncrease(item: CartItemModel) {
    this.cartService.onQuantityIncrease(item)
  }

  turnDetUp() {
    this.order = false
  }

  turnDetDown() {
    this.order = true
  }

}
