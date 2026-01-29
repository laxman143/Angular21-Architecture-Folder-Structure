import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { ListResponse } from '../../shared/model/api-response.model';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class Product {
  private http = inject(HttpClient);
  
  getProducts(){
    return this.http.get<ListResponse<Product[]>>("https://dummyjson.com/products").pipe(map((res :any)=> ({
       items: res.products,
       total: res.total,
       limit: res.limit,
       skip :res.skip
    })));
  }
}
