import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { EMPTY, Observable, switchMap } from 'rxjs';
import { ProductModel, ProductObservableService } from 'src/app/products';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.sass']
})
export class ProductsComponent implements OnInit {

  products$!: Observable<Array<ProductModel>>

  private editedProduct!: ProductModel

  constructor(
    private productObservableService: ProductObservableService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.products$ = this.productObservableService.getProducts()

    const observer = {
      next: (product: ProductModel) => {
        this.editedProduct = { ...product };
        console.log(
          `Last time you edited product ${JSON.stringify(this.editedProduct)}`
        );
      },
      error: (err: any) => console.log(err)
    };
    this.route.paramMap
      .pipe(
        switchMap((params: ParamMap) => {
          return params.has('editedProductID')
            ? this.productObservableService.getProduct(params.get('editedProductID')!)
            : EMPTY;
        })
      )
      .subscribe(observer);
  }

  onProductEdit(product: ProductModel) {
    const link = ['/admin/product/edit', product.id]
    this.router.navigate(link)
  }

}
