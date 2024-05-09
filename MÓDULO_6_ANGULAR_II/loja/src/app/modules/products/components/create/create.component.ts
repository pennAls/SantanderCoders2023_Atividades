import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { first } from 'rxjs';
import { Product } from '../../models/product.model';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-create',
  standalone: true,
  imports: [
    RouterModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
  ],
  templateUrl: './create.component.html',
  styleUrl: './create.component.scss',
})
export class CreateComponent implements OnInit {
  productsForm!: FormGroup;

  id?: string;

  constructor(
    private productsService: ProductsService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.buildForm();

    this.id = this.route.snapshot.params['id'];
    if (this.id) {
      this.getProduct(this.id);
    }
  }

  buildForm(): void {
    this.productsForm = new FormGroup({
      name: new FormControl(null, [Validators.required]),
      description: new FormControl(null, [Validators.required]),
      price: new FormControl(null, [Validators.required]),
      qty: new FormControl(null, [Validators.required]),
      image: new FormControl(null, [Validators.required]),
    });
  }

  getProduct(id: string): void {
    this.productsService
      .getProductById(id)
      .pipe(first())
      .subscribe({
        next: (product) => {
          this.productsForm.patchValue(product);
        },
        error: (err) => {
          console.log(err);
        },
      });
  }

  onSave(): void {
    const product: Product =  this.productsForm.getRawValue();

    if (this.id) {
      this.updateProduct(product);
      return;
    }

    this.createProduct(product);
  }

  createProduct(product: Product): void {
    this.productsService
      .createProducts(product)
      .pipe(first())
      .subscribe({
        complete: () => {
          this.router.navigate(['products']);
        },
        error: (err) => {
          console.log(err);
        },
      });
  }

  updateProduct(product: Product): void {
    this.productsService
      .updateProduct(this.id as string, product)
      .pipe(first())
      .subscribe({
        complete: () => {
          this.router.navigate(['products']);
        },
        error: (err) => {
          console.log(err);
        },
      });
  }
}
