import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProductsComponent } from './modules/products/products.component';
import { HeaderComponent } from './commons/components/header/header.component';
import { LoadingService } from './commons/services/loading.service';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    ProductsComponent,
    HeaderComponent,
    MatProgressSpinnerModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  title = 'loja';
  isLoading = false;
  constructor(public loadingService: LoadingService) {}

  ngOnInit(): void {
    this.loadingService.isLoading$.subscribe((res) => {
      this.isLoading = res;
    });
  }
}
