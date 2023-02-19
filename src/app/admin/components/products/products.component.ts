import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ProductModel, ProductObservableService } from 'src/app/products';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.sass']
})
export class ProductsComponent implements OnInit {

  products$!: Observable<Array<ProductModel>>

  constructor(
    private productObservableService: ProductObservableService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.products$ = this.productObservableService.getProducts()
  }

  onProductEdit(product: ProductModel) {
    const link = ['/admin/product/edit', product.id]
    this.router.navigate(link)
  }

}
