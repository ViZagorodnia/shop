# Shop

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.2.3.

## Functions on 15 Dec
Cart Service, adding items to cart, remove from cart, count number of items in cart
Products service - return list of products from JSON file
CartListComponent, ProductListComponent, ProductComponent, ProductModel

## Changes on 27 Dec
Refactored app to module system. Created CartModule, OrdersModule, ProductsModule, SharedModule
ProductComponent only represent content, ProductListComponent make all func(render products, adding items to the cart), implements Output and Input for transferring product data

## Changes on 29 Dec
Refactored CartListComponent, add methods to calculate amount of items in cart, change style of cart to table view
