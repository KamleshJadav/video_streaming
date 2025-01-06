import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'hashteg',
})
export class HashtegPipe implements PipeTransform {

  transform(value: string): string {
    value = value.trim();
    return value.startsWith('#') ? value : `#${value}`
  }

}
