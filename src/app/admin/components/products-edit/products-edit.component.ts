import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, type UrlTree, type Data, ParamMap } from '@angular/router';
import { Location } from '@angular/common';
import { map, Observable, Subscription, switchMap } from 'rxjs';

import { ProductModel, ProductObservableService } from '../../../products';
import { EditProductService, AutoUnsubscribe, CanComponentDeactivate } from '../../../core';

@Component({
  selector: 'app-products-edit',
  templateUrl: './products-edit.component.html',
  styleUrls: ['./products-edit.component.sass']
})
@AutoUnsubscribe()
export class ProductsEditComponent implements OnInit, CanComponentDeactivate {
  product!: ProductModel
  originalProduct!: ProductModel

  private onGoBackClick: boolean = false;
  private sub!: Subscription;

  constructor(
    private editProductService: EditProductService,
    private route: ActivatedRoute,
    private router: Router,
    private location: Location,
    private productObservableService: ProductObservableService
  ) { }

  ngOnInit(): void {
    this.route.data.pipe(map((data: Data) => data['product'])).subscribe((product: ProductModel) => {
      this.product = { ...product };
      this.originalProduct = { ...product };
    });
  }

  onSaveProduct(): void {
    const product = { ... this.product }
    //const method = product.id ? 'updateProduct' : 'createProduct'
    const observer = {
      next: (savedProduct: ProductModel) => {
        this.originalProduct = { ...savedProduct }
        product.id
              ? // optional parameter: http://localhost:4200/users;editedUserID=2
                this.router.navigate(['admin', { editedProductID: product.id }])
              : this.onGoBack();
      },
      error: (err: any) => console.log(err)
    }
    this.sub = this.productObservableService.updateProduct(product).subscribe(observer)
  }

  onGoBack(): void {
    this.onGoBackClick = true;
    this.location.back()
  }

  canDeactivate():
  | Observable<boolean | UrlTree>
  | Promise<boolean | UrlTree>
  | boolean
  | UrlTree {

    if (this.onGoBackClick) return true;

    const flags = (Object.keys(this.originalProduct) as (keyof ProductModel)[]).map(key => {
    if (this.originalProduct[key] === this.product[key]) {
      return true;
    }
    return false;
  });

  if (flags.every(el => el)) {
    return true;
  }

  // Otherwise ask the user with the dialog service and return its
  // promise which resolves to true or false when the user decides
  return this.editProductService.confirm('Discard changes?');
}

}
