import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterBy'
})
export class FilterByPipe implements PipeTransform {

  transform(items: any[], attribute: string, value: string): any[] {
    return items.filter(item => item[attribute].toLowerCase().includes(value.toLowerCase()));
  }

}
