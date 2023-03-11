import { Component, AfterContentChecked, OnInit, ViewChild, ViewContainerRef } from '@angular/core'
import { faTrash, faUpLong, faDownLong, faChevronLeft, faChevronRight} from '@fortawesome/free-solid-svg-icons'
import { Router } from '@angular/router'
import { CartPromiseService } from '../../services/cart-promise.service'
import CartItemModel from '../../models/cart-model'

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.sass']
})
export class CartListComponent implements OnInit, AfterContentChecked {
  items$!: Promise<CartItemModel[]>
  totalQuantity$!: Promise<number>
  totalCost$!: Promise<number>

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
    this.items$ = this.cartPromiseService.getItems()
    this.totalCost$ = this.cartPromiseService.getTotalCost()
    this.totalQuantity$ = this.cartPromiseService.getTotalQuantity()
  }

  ngAfterContentChecked(): void {
    // this.totalCost$ = this.cartPromiseService.totalCost
    // this.totalQuantity$ = this.cartPromiseService.totalQuantity
  }

  onClearCart(): void {
    this.cartPromiseService.onClearCart()
    this.router.navigate([''])
  }

  onDeleteItem(item: CartItemModel) {
    this.cartPromiseService.deleteItem(item)
    this.cartPromiseService.isCartEmpty()
      .then( res => {
        if(res) {
          this.router.navigate([''])
        }
      })
      .catch(err => console.log(err)
      )
  }

  onQuantityDecrease(item: CartItemModel) {
    this.cartPromiseService.onQuantityDecrease(item)
  }

  onQuantityIncrease(item: CartItemModel) {
    this.cartPromiseService.onQuantityIncrease(item)
  }

  turnDetUp() {
    this.order = false
  }

  turnDetDown() {
    this.order = true
  }

  checkCart(): void {
    this.cartPromiseService.isCartEmpty()
      .then(res => {
        if(res) {
          import('../../../products/components/modal-message/modal-message.component')
          .then(module => {
            const modalRef = this.modal.createComponent(module.ModalMessageComponent)
            modalRef.instance.message = 'Your cart is empty'
          })

          setTimeout(() => {
            this.modal.clear()
          }, 1000)
        }
      })
      .catch(err => {
        console.log(err)
      })
  }
}
