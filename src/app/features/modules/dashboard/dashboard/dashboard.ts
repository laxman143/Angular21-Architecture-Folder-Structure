import { Component } from '@angular/core';
import { Highlight } from '../../../../shared/directives/highlight';
import { PriceformatPipe } from '../../../../shared/pipes/priceformat-pipe';

@Component({
  selector: 'app-dashboard',
  imports: [Highlight,PriceformatPipe],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.scss',
})
export class Dashboard {

  price1 : number = 10.2005;
  price2! : number;

}
