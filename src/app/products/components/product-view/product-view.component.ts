import { Component, OnDestroy, OnInit } from '@angular/core'
import { ProductModel } from '../../models/product-model'
import { faCartShopping, faChevronLeft } from '@fortawesome/free-solid-svg-icons'
import { CartPromiseService } from 'src/app/cart/services/cart-promise.service'

import { Store } from '@ngrx/store'
import { Subject, takeUntil} from 'rxjs';
import { selectSelectedProductByUrl } from 'src/app/core/@ngrx';
import * as RouterActions from './../../../core/@ngrx/router/router.actions'

@Component({
  selector: 'app-product-view',
  templateUrl: './product-view.component.html',
  styleUrls: ['./product-view.component.sass']
})
export class ProductViewComponent implements OnInit, OnDestroy {

  product: ProductModel = new ProductModel(null, '', '', 1, '', true, '', 1)
  faCart = faCartShopping
  faLeft = faChevronLeft

  private componentDestroyed$: Subject<void> = new Subject<void>();

  constructor(
    private cartPromiseService: CartPromiseService,
    private store: Store) {}

  ngOnInit(): void {
    const observer: any = {
      next: (product: ProductModel) => {
        if (product) {
          this.product = {...product};
        } else {
          this.product = new ProductModel(null, '', '', 1, '', true, '', 1);
        }

      },
      error(err: any) {
        console.log(err);
      },
      complete() {
        console.log('Stream is completed');
      }
    };

    this.store.select(selectSelectedProductByUrl)
      .pipe(
        takeUntil(this.componentDestroyed$)
      )
      .subscribe(observer);
  }

  ngOnDestroy(): void {
    this.componentDestroyed$.next();
    this.componentDestroyed$.complete();
  }

  onAddToCart(product: ProductModel) {
    this.cartPromiseService.addToCart(product)
    this.store.dispatch(RouterActions.go({path: ['/cart']}))
  }
  onGoBack() {
    this.store.dispatch(RouterActions.go({path: ['']}))
  }
}
