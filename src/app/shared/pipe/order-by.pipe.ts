import { Pipe, PipeTransform } from '@angular/core'
import CartItemModel from 'src/app/cart/models/cart-model'

@Pipe({
  name: 'orderBy',
  pure: false
})
export class OrderByPipe implements PipeTransform {

  //  isAsc boolean; true: descending order; false: ascending

  transform(array: Array<any>, orderBy: string, isAsc: boolean): Array<CartItemModel> {
    array.sort((a: any, b: any) => {
      let firstItem = a[orderBy]
      let secondItem = b[orderBy]
      if(firstItem == undefined && secondItem == undefined) return 0
      if(firstItem == undefined && secondItem != undefined) return isAsc ? 1 : -1
      if(firstItem != undefined && secondItem == undefined) return isAsc ? -1 : 1
      if(firstItem == secondItem) return 0
      return isAsc ? (firstItem.toString().toLowerCase() > secondItem.toString().toLowerCase() ? -1 : 1) : (secondItem.toString().toLowerCase() > firstItem.toString().toLowerCase() ? -1 : 1)
    })
    return array
  }
}
