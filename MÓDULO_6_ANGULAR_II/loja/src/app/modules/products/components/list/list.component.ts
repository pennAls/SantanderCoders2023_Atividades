import { Component } from '@angular/core';
import { Product } from '../../models/product.model';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Observable, first } from 'rxjs';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [MatCardModule, MatButtonModule, HttpClientModule, RouterModule],
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss',
})
export class ListComponent {
  products?: Product[];

  observable = new Observable((observer) => {});

  constructor(private productsService: ProductsService) {}

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts(): void {
    this.productsService
      .getProducts()
      .pipe(first())
      .subscribe({
        next: (response) => {
          this.products = response;
        },
        error: (err) => {
          console.log(err);
        },
      });
  }
}
