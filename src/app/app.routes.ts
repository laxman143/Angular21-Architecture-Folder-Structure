import { Routes } from '@angular/router';
import { DashboardLayout } from './layout/dashboard-layout/dashboard-layout';
import { authGuard } from './core/guards/auth-guard';

export const routes: Routes = [
    {
        path : 'login',
        loadComponent: () => import('./features/modules/auth/login/login').then(m=>m.Login)
    },
    {
        path: '',
        component: DashboardLayout,
        canActivate:[authGuard],
        children: [
            {
                path:'dashboard',
                loadChildren:()=> import('./features/modules/dashboard/dashboard.routes').then(m =>m.DASHBOARD_ROUTES)

            },
            {
                path:'products',
                loadChildren:()=> import('./features/modules/products/product.routes').then(m=>m.PRODUCT_ROUTES)
            },
            {
                path: '',
                pathMatch:'full',
                redirectTo: 'dashboard'
            }
        ]
    },
     { path: '**', redirectTo: 'dashboard' }
];
