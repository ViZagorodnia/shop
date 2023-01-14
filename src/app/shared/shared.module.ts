import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { HighlightDirective } from './directives/highlight.directive';
import { FontsBoldDirective } from './directives/fonts-bold.directive'



@NgModule({
  declarations: [
    HighlightDirective,
    FontsBoldDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HighlightDirective,
    FontsBoldDirective
  ]
})
export class SharedModule { }
