import { Component, AfterContentChecked, OnInit, ViewChild, ViewContainerRef } from '@angular/core'
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
  items!: Promise<CartItemModel[]>
  totalQuantity: number = 0
  totalCost: number = 0

  faTrash = faTrash
  faUp = faUpLong
  faDown = faDownLong
  faBack = faChevronLeft
  faCheckout = faChevronRight

  selectedFilter: string = 'name'
  order: boolean = true

  @ViewChild('modal', {read: ViewContainerRef}) modal!: ViewContainerRef

  constructor(
    private cartPromiseService: CartPromiseService,
    private router: Router
    ) {}

  ngOnInit(): void {
    this.items = this.cartPromiseService.getItems()
  }

  ngAfterContentChecked(): void {
    this.totalCost = this.cartPromiseService.getTotalCost()
    this.totalQuantity = this.cartPromiseService.getTotalQuantity()
  }

  onClearCart(): void {
    this.cartPromiseService.onClearCart()
    this.router.navigate([''])
  }

  onDeleteItem(item: CartItemModel) {
    this.cartPromiseService.deleteItem(item)
    if(this.cartPromiseService.isCartEmpty()) {
      this.router.navigate([''])
    }
  }

  onQuantityDecrease(item: CartItemModel) {
    if(item.quantity === 1) {
      return this.onDeleteItem(item)
    }
    const updatedItem = {
      ...item,
      quantity: item.quantity--
    }
    this.cartPromiseService.updateCart(updatedItem)
  }

  onQuantityIncrease(item: CartItemModel) {
    const updatedItem = {
      ...item,
      quantity: item.quantity++
    }
    this.cartPromiseService.updateCart(updatedItem)
  }

  turnDetUp() {
    this.order = false
  }

  turnDetDown() {
    this.order = true
  }

  checkCart(): void {
    if(this.cartPromiseService.isCartEmpty()) {
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
