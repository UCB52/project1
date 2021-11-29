import { Pipe, PipeTransform } from '@angular/core';
import { Person } from '../models/person';

@Pipe({
  name: 'personFilter',
})
export class PersonFilterPipe implements PipeTransform {
  transform(value: Person[], filterText2?: any): Person[] {
    filterText2 = filterText2 ? filterText2.toLocaleLowerCase('tr') : null;
    return filterText2
      ? value.filter(
          (p: Person) =>
            p.heading.toLocaleLowerCase('tr').indexOf(filterText2) !== -1
        )
      : value;
  }
}
