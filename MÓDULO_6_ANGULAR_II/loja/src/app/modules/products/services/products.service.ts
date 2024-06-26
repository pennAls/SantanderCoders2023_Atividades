import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment.development';

import { Product } from '../models/product.model';
import { Constantes } from '../../../commons/constants/constants.enum';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  apiUrl = `${environment.apiUrl}/products`;

  constructor(private http: HttpClient) {}

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.apiUrl);
  }

  getProductById(id: string): Observable<Product> {
    return this.http.get<Product>(`${this.apiUrl}/${id}`);
  }

  createProducts(product: Product): Observable<void> {
    return this.http.post<void>(this.apiUrl, product);
  }

  updateProduct(id: string, product: Product): Observable<void> {
    return this.http.put<void>(
      `${this.apiUrl}/${id}`,
      product,
    );
  }

  deleteProduct(id: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
} 
