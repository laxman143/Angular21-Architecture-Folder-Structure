import { HttpClient } from '@angular/common/http';
import { Component, inject, signal } from '@angular/core';
import { Product } from '../../../../core/services/product';
import { ListResponse } from '../../../../shared/model/api-response.model';

@Component({
  selector: 'app-product-list',
  imports: [],
  templateUrl: './product-list.html',
  styleUrl: './product-list.scss',
})
export class ProductList {
  http = inject(HttpClient);
  productService = inject(Product)
  products  = signal<any[]>([]);
  constructor(){
    this.getProduct();
  }

 getProduct(){
  this.productService.getProducts().subscribe((response:ListResponse<Product[]>) => {
     console.log(response)
     this.products.set(response?.items);
  })
 }
}
