import { Routes  } from "@angular/router";
import { ProductList } from "./product-list/product-list";

export const PRODUCT_ROUTES: Routes  = [
    {
        path: '',
        component: ProductList
    },
    {
        path:'list',
        redirectTo:''
    },
    {
        path:"details",
        loadComponent: () => import('./product-details/product-details').then(m => m.ProductDetails)    
    }
]