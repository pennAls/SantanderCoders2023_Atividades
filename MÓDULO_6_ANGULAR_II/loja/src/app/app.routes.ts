import { Routes } from '@angular/router';
import { ProductsComponent } from './modules/products/products.component';
import { AuthComponent } from './modules/auth/auth.component';
import { createComponent } from '@angular/core';
import { ListComponent } from './modules/products/components/list/list.component';
import { CreateComponent } from './modules/products/components/create/create.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'products',
    pathMatch: 'full',
  },
  {
    path: 'products',
    component: ProductsComponent,
    children: [
      {
        path: 'create',
        component: CreateComponent,
      },
      {
        path: 'list',
        component: ListComponent,
      },
    ],
  },
  {
    path: 'auth',
    component: AuthComponent,
  },
];
