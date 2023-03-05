import { Component, OnInit } from '@angular/core'
import { ActivatedRoute, Data, ParamMap, Router } from '@angular/router'
import { map, switchMap } from 'rxjs'
import { ProductModel } from '../../models/product-model'
import { faCartShopping, faChevronLeft } from '@fortawesome/free-solid-svg-icons'
import { ProductObservableService } from '../../services'
import { CartPromiseService } from 'src/app/cart/services/cart-promise.service'

@Component({
  selector: 'app-product-view',
  templateUrl: './product-view.component.html',
  styleUrls: ['./product-view.component.sass']
})
export class ProductViewComponent implements OnInit {

  product: ProductModel = new ProductModel()
  faCart = faCartShopping
  faLeft = faChevronLeft

  constructor(
    private productObsevableService: ProductObservableService,
    private cartPromiseService: CartPromiseService,
    private router: Router,
    private route: ActivatedRoute) {}

  ngOnInit(): void {
    const observer = {
      next: (product: ProductModel) => (this.product = { ...product }),
      error: (err: any) => console.log(err)
    }

    this.route.paramMap
      .pipe(
        switchMap((params: ParamMap) =>
          this.productObsevableService.getProduct(params.get('productID')!)
        ),
        // transform undefined => {}
        map(el => el ? el : {} as ProductModel)
      )
      .subscribe(observer)
  }

  onAddToCart(product: ProductModel) {
    this.cartPromiseService.addToCart(product)
    this.router.navigate(['/cart'])
  }
  onGoBack() {
    this.router.navigate([''])
  }
}
