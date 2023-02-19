import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  ActivatedRouteSnapshot
} from '@angular/router';
import { catchError, EMPTY, Observable, of, switchMap, take } from 'rxjs';
import { ProductObservableService } from 'src/app/products';
import { ProductModel } from 'src/app/products/models/product-model';

@Injectable({
  providedIn: 'root'
})
export class ProductResolver implements Resolve<ProductModel> {

  constructor(
      private productObservableService: ProductObservableService,
      private router: Router
    ) {}

  resolve(route: ActivatedRouteSnapshot): Observable<ProductModel> | Promise<ProductModel> {
    console.log('Admin Product guard is called');

    if(!route.paramMap.has('productID')) {
      return of(new ProductModel(0, '', '', 0, '', true, '', 1))
    }

    const id = route.paramMap.get('productID')!

    return this.productObservableService.getProduct(id).pipe(
      switchMap((product: ProductModel) => {
        if (product) {
          return of(product);
        } else {
          this.router.navigate(['/admin']);
          return EMPTY;
        }
      }),
      take(1),
      catchError(() => {
        this.router.navigate(['/products-list']);
        // catchError MUST return observable
        return EMPTY;
      })
    );
  }
}
