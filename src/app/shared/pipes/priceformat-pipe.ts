import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'priceformat',
})
export class PriceformatPipe implements PipeTransform {

  // transform(value: unknown, ...args: unknown[]): unknown {
  //   return null;
  // }

  
  transform(value: number | null, currency : string = '₹', decimals:number = 2): string {
    if(value === null || value === undefined) return '-';
    return `${currency}${value.toFixed(decimals)}`;
  }
}
