import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ProductModel } from 'src/app/products';

import { Store } from '@ngrx/store'
import { selectProductsData, selectProductsError } from 'src/app/core/@ngrx'
import * as ProductsActions from '../../../core/@ngrx/products/products.actions'

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.sass']
})
export class ProductsComponent implements OnInit {

  products$!: Observable<ReadonlyArray<ProductModel>>
  productsError$!: Observable<Error | string | null>

  //private editedProduct!: ProductModel

  constructor(
    //private productObservableService: ProductObservableService,
    private route: ActivatedRoute,
    private router: Router,
    private store: Store
  ) { }

  ngOnInit(): void {
    this.products$ = this.store.select(selectProductsData)
    this.productsError$ = this.store.select(selectProductsError)
    this.store.dispatch(ProductsActions.getProducts())
  }

  //First variant
  // ngOnInit(): void {
  //   this.products$ = this.productObservableService.getProducts()

  //   const observer = {
  //     next: (product: ProductModel) => {
  //       this.editedProduct = { ...product };
  //       console.log(
  //         `Last time you edited product ${JSON.stringify(this.editedProduct)}`
  //       );
  //     },
  //     error: (err: any) => console.log(err)
  //   };
  //   this.route.paramMap
  //     .pipe(
  //       switchMap((params: ParamMap) => {
  //         return params.has('editedProductID')
  //           ? this.productObservableService.getProduct(params.get('editedProductID')!)
  //           : EMPTY;
  //       })
  //     )
  //     .subscribe(observer);
  // }

  onProductEdit(product: ProductModel) {
    const link = ['/admin/product/edit', product.id]
    this.router.navigate(link)
  }

}
