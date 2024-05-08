import { Component, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { Product } from './models/product.model';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { first } from 'rxjs';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [MatCardModule, MatButtonModule,HttpClientModule,RouterModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss',
 
})
export class ProductsComponent {
 
}
