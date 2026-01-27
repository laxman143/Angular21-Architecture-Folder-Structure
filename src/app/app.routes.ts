import { Routes } from '@angular/router';
import { DashboardLayout } from './layout/dashboard-layout/dashboard-layout';

export const routes: Routes = [
    {
        path : 'login',
        loadComponent: () => import('./features/modules/auth/login/login').then(m=>m.Login)
    },
    {
        path: '',
        component: DashboardLayout,
        children: [
            {
                path:'dashboard',
                loadChildren:()=> import('./features/modules/dashboard/dashboard.routes').then(m =>m.DASHBOARD_ROUTES)

            },
            {
                path:'products',
                loadChildren:()=> import('./features/modules/products/product.routes').then(m=>m.PRODUCT_ROUTES)
            }
        ]
    },
     { path: '**', redirectTo: 'dashboard' }
];
