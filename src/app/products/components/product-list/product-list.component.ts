import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/cart/services/cart.service';
import { ProductModel } from '../../models/product-model';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.sass']
})
export class ProductListComponent implements OnInit {

  products: Array<ProductModel> = []

  constructor(private productsService: ProductsService,
              private cartService: CartService) { }

  ngOnInit(): void {
    this.productsService.getProducts().subscribe(data => {
      this.products = data.productsList
      console.log(this.products)
    })
  }

  onProductSelect(product: any) {
    console.log('You buy new item')
    this.cartService.addToCart(product)
  }
}
