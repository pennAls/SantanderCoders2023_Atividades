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
import { Router, RouterLink } from '@angular/router';
import { first } from 'rxjs';

import { UserCredentials } from '../../models/user-credentials.model';
import { AuthService } from '../../services/auth.service';
import { Constantes } from '../../../../commons/constants/constants.enum';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    RouterLink,
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent implements OnInit {
  form!: FormGroup;

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {
    this.buildForm();
  }

  buildForm(): void {
    this.form = new FormGroup({
      email: new FormControl(null, [Validators.required]),
      password: new FormControl(null, [Validators.required]),
    });
  }

  login(): void {
    const user: UserCredentials = this.form.getRawValue();
    this.authService
      .login(user)
      .pipe(first())
      .subscribe({
        next: (res) => {
          localStorage.setItem(Constantes.TOKEN_KEY, `Bearer ${res.token}`);
          this.router.navigate(['products']);
        },
        error: (err) => {
          console.log(err);
        },
      });
  }
}
