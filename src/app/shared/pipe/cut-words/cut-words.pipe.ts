import { Pipe, PipeTransform } from '@angular/core';


const SEPARATOR = ' ';
const DOTS = '...';

@Pipe({
  name: 'cutWords'
})
export class CutWordsPipe implements PipeTransform {

  transform(value: string, limit: number): any {
    if (value.length > limit) {
      let cutValue = value.substr(0, limit);

      if (value.charAt(limit).localeCompare(SEPARATOR) !== 0) {
        const spaceIndex = cutValue.lastIndexOf(SEPARATOR);
        cutValue = value.substr(0, spaceIndex);
      }

      return `${cutValue}${DOTS}`;
    } else {
      return value;
    }
  }

}
