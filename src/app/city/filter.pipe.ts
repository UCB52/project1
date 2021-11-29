import { Pipe, PipeTransform } from '@angular/core';
import { City } from '../models/city';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: City[], filterText5?:any):City[] {
    filterText5 = filterText5?filterText5.toLocaleLowerCase('tr'):null;
    return filterText5?value.filter((c:City)=>c.heading.toLocaleLowerCase('tr').indexOf(filterText5)!==-1||c.name.toLocaleLowerCase('tr').indexOf(filterText5)!==-1):value;
  }
}
