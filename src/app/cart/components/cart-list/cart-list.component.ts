import { Component, AfterContentChecked, OnInit, ViewChild, ViewContainerRef } from '@angular/core'
import { CartService } from '../../services/cart.service'
import { faTrash, faUpLong, faDownLong, faChevronLeft, faChevronRight} from '@fortawesome/free-solid-svg-icons'
import { CartItemModel } from '../../models/cart-model'
import { Router } from '@angular/router'
import { CartPromiseService } from '../../services/cart-promise.service'

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
  faBack = faChevronLeft
  faCheckout = faChevronRight

  @ViewChild('modal', {read: ViewContainerRef}) modal!: ViewContainerRef

  constructor(private cartService: CartService, private cartPromiseService: CartPromiseService) {
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

  checkCart(): void {
    if(this.cartService.isCartEmpty()) {
      // Adding dynamic modal message component
    import('../../../products/components/modal-message/modal-message.component')
    .then(module => {
      const modalRef = this.modal.createComponent(module.ModalMessageComponent)
      modalRef.instance.message = 'Your cart is empty'
    })

    setTimeout(() => {
      this.modal.clear()
    }, 1000)
  }
  }
}
