import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ProductsService } from '../../services/products.service';
import { first } from 'rxjs';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-create',
  standalone: true,
  imports: [
    MatIconModule,
    MatButtonModule,
    FormsModule,
    MatInputModule,
    MatFormFieldModule,
    ReactiveFormsModule,
  ],
  templateUrl: './create.component.html',
  styleUrl: './create.component.scss',
})
export class CreateComponent {
  constructor(private productsService: ProductsService) {}

  product = {
    name: new FormControl(),
    description: new FormControl(),
    price: new FormControl(),
    qnt: new FormControl(),
    image: new FormControl(),
  };

  productsForm = new FormGroup(this.product);

  onSave(): void {
    const product = this.productsForm.getRawValue();
    this.productsService
      .createProducts(product)
      .pipe(first())
      .subscribe({
        next: (response) => {
          console.log(response);
        },
        error: (err) => {
          console.log(err);
        },
      });
  }
}
