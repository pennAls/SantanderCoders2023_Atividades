import { Component, OnDestroy, OnInit } from '@angular/core';
import { Product } from '../../models/product.model';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Observable, Subject, first } from 'rxjs';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { Route, Router, RouterModule } from '@angular/router';
import { ProductsService } from '../../services/products.service';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmationModalComponent } from '../../../../commons/components/confirmation-modal/confirmation-modal.component';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [MatCardModule, MatButtonModule, HttpClientModule, RouterModule],
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss',
})
export class ListComponent implements OnInit, OnDestroy {
  protected ngUnsubscribe = new Subject();
  products?: Product[];

  observable = new Observable((observer) => {});

  constructor(
    private productsService: ProductsService,
    public dialog: MatDialog,
    private router: Router,
  ) {}

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

  onDelete(id: string): void {
    this.productsService
      .deleteProduct(id)
      .pipe(first())
      .subscribe({
        complete: () => {
          this.getProducts();
        },
        error: (err) => {
          console.log(err);
        },
      });
  }

  openDialog(id: string): void {
    const dialog = this.dialog.open(ConfirmationModalComponent, {
      width: '250px',
      disableClose: true,
      data: {
        id,
      },
    });
    dialog
      .afterClosed()
      .pipe(first())
      .subscribe((res) => {
        if (res) {
          this.onDelete(id);
        }
      });
  }

  editProduct(id: string) {
    this.router.navigate(['products', 'edit', id]);
  }

  ngOnDestroy(): void {
    this.ngUnsubscribe.next(true);
    this.ngUnsubscribe.complete();
  }
}
