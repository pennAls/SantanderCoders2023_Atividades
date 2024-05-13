import { Routes } from '@angular/router';
import { ProductsComponent } from './modules/products/products.component';
import { AuthComponent } from './modules/auth/auth.component';
import { Component, createComponent } from '@angular/core';
import { ListComponent } from './modules/products/components/list/list.component';
import { CreateComponent } from './modules/products/components/create/create.component';
import { RegisterComponent } from './modules/auth/components/register/register.component';
import { LoginComponent } from './modules/auth/components/login/login.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'products',
    pathMatch: 'full',
  },
  {
    path: 'auth',
    component: AuthComponent,
    children: [
      {
        path: 'login',
        component: LoginComponent,
      },
      {
        path: 'register',
        component: RegisterComponent,
      },
    ],
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
        path: '',
        component: ListComponent,
      },
      {
        path: 'edit/:id',
        component: CreateComponent,
      },
    ],
  },
  {
    path: 'auth',
    component: AuthComponent,
  },
];
