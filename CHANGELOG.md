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

## Changes on 5 Jan
Added CartItemComponent, add func to encrease decrease and remove items from the cart

## Changes on 6 Jan
Changed OnPush strategy to CartItemComponent

## Changes on 7 Jan
Using @ViewChild and ElementRef type HTMLHeadingElement, to render app title
Created HighlightDirective in SharedModule to highlight item in cart

## Changes on 8 Jan
Refactored AppComponent to standalone component
Upgraded Angular from 13 to 14v
Adding dynamic component to show ModalMessageComponent
Adding ngClass to ProductComponent - using HostListener change hovered variable to use ngClass 

