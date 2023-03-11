import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core'
import { faPlus, faMinus, faXmark } from '@fortawesome/free-solid-svg-icons'
import CartItemModel from '../../models/cart-model'

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CartItemComponent implements OnInit {

  faPlus = faPlus
  faMinus = faMinus
  faXmark = faXmark

  @Input() item!: CartItemModel
  @Output() quantityIncrease: EventEmitter<CartItemModel> = new EventEmitter<CartItemModel>()
  @Output() quantityDecrease: EventEmitter<CartItemModel> = new EventEmitter<CartItemModel>()
  @Output() deleteItem: EventEmitter<CartItemModel> = new EventEmitter<CartItemModel>()

  constructor () { }

  ngOnInit(): void {
  }

  onIncrease(item: CartItemModel) {
    this.quantityIncrease.emit(item)
  }

  onDecrease(item: CartItemModel) {
    this.quantityDecrease.emit(item)
  }

  onDeleteItem(item: CartItemModel) {
    this.deleteItem.emit(item)
  }

}
