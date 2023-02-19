import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { HighlightDirective, FontsBoldDirective, OrderByPipe } from './'
import { FormsModule } from '@angular/forms'



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
