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

## Changes on 12 Jan
Created: ConfigOptionsService with get and set config methods with Partial type. Added setConfigProperty(key: keyof..., value: any)
Created ConstantsService registrated in FirstComponent with useValue method
Created GeneratorService and GeneratorFactory to generate string of n length containing a-z, A-Z, 0-9 symbols
Registered for testing purposes in FirstComponent

## Changes on 14 Jan
Created genId service with method of generating sequence of numbers(possibility to set any number of items) and add it to generator service.
Create LocalStorage service, registered it in FirstComponent using method useValue
Created directive whitch change font weight depends on input value (use Renderer2)

## Changes on 20 Jan
Refactored ProductService to return Observable and using async pipe

## Changes on 23 Jan
Created OrderByPipe, implement filtering for CartListComponent, declared in SharedModule
Change order detection organized using buttons
Export CommonModule, FormsModule from SharedModule and import SharedModule to other modules.
