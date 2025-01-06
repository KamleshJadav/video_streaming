import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'truncate',
})
export class TruncatePipe implements PipeTransform {

  transform(value: string, limit: number = 5000, showFull: boolean = false): string {
    if (!value) return '';
    if (showFull || value.length <= limit) return value;

    return value.substring(0, limit) + '...';
  }

}
