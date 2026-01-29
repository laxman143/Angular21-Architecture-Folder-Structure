import { HttpClient } from '@angular/common/http';
import { Component, inject, signal } from '@angular/core';

@Component({
  selector: 'app-product-list',
  imports: [],
  templateUrl: './product-list.html',
  styleUrl: './product-list.scss',
})
export class ProductList {
  http = inject(HttpClient);
  products  = signal<any[]>([]);
  constructor(){
    this.getProduct();
  }

 getProduct(){
  this.http.get("https://dummyjson.com/products").subscribe((response:any)=> {
    console.log(response.products)
    this.products.set(response?.products);
  })
 }
}
