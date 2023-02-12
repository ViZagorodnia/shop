import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  ActivatedRouteSnapshot
} from '@angular/router';
import { EMPTY, Observable, of } from 'rxjs';
import { ProductModel } from 'src/app/products/models/product-model';
import { Products, ProductsService } from 'src/app/products/services/products.service';

@Injectable({
  providedIn: 'root'
})
export class ProductResolver implements Resolve<ProductModel> {

  constructor(
      private productService: ProductsService,
      private router: Router
    ) {}

  resolve(route: ActivatedRouteSnapshot): Observable<ProductModel> {
    console.log('Admin Product guard is called');

    if(!route.paramMap.has('productID')) {
      return of(new ProductModel(0, '', '', 0, '', true, '', 1))
    }

    const id = route.paramMap.get('productID')!

    const product = Products.find(item => item.id === +id)
    if(product) {
      return of(product!)
    }

    this.router.navigate(['/admin'])
    return EMPTY
  }
}
