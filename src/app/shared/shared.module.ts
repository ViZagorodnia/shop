import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { HighlightDirective } from './directives/highlight.directive';
import { FontsBoldDirective } from './directives/fonts-bold.directive';
import { OrderByPipe } from './pipe/order-by.pipe'
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    HighlightDirective,
    FontsBoldDirective,
    OrderByPipe
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    HighlightDirective,
    FontsBoldDirective,
    OrderByPipe,
    CommonModule,
    FormsModule
  ]
})
export class SharedModule { }
