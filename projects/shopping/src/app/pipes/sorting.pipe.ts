// Ex:Custom Pipe  - Parameterized
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sorting'
})
export class SortingPipe implements PipeTransform {

  transform(list:any, reverse?:boolean) {
    list.sort();
    if(reverse==true){
      list.sort();
      list.reverse();
    }
    return list;
 }
}
