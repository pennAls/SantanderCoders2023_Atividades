import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { filter, first } from 'rxjs';
import { AddressDto } from 'src/app/models/address.dto';
import { Address, User } from 'src/app/models/user.model';

@Component({
  selector: 'app-cadastrar-usuario',
  templateUrl: './cadastrar-usuario.component.html',
  styleUrls: ['./cadastrar-usuario.component.css'],
})
export class CadastrarUsuarioComponent implements OnInit {
  userForm = new FormGroup({
    _id: new FormControl(),
    name: new FormControl('', [
      Validators.required,
      Validators.minLength(2),
      Validators.pattern(/^[a-zA-Z]+$/),
    ]),
    email: new FormControl('', [
      Validators.required,
      Validators.pattern(/^[^\s@]+@[^\s@]+\.[^\s@]+$/),
    ]),
    profession: new FormControl('', [Validators.required]),
    documentNumber: new FormControl('', [
      Validators.required,
      Validators.minLength(11),
      Validators.maxLength(11),
    ]),
    birthDate: new FormControl('', [Validators.required]),
    monthlyIncome: new FormControl('', [Validators.required]),

    address: new FormGroup({
      zipCode: new FormControl('', [Validators.required]),
      street: new FormControl('', [Validators.required]),
      number: new FormControl(0, [Validators.required]),
      complement: new FormControl(),
      district: new FormControl('', [Validators.required]),
      city: new FormControl('', [Validators.required]),
      state: new FormControl('', [Validators.required]),
      country: new FormControl('', [Validators.required]),
    }),
  });

  constructor(private http: HttpClient) {}

  apiKey = '';
  apiUrl = `https://crudcrud.com/api/${this.apiKey}/users`;

  ngOnInit(): void {
    // this.userForm.patchValue(this.user)
    this.setZipCodeSubscription();
  }

  private setZipCodeSubscription(): void {
    this.userForm.controls.address.controls.zipCode.valueChanges
      .pipe(filter((value) => value?.length === 8))
      .subscribe((value) => {
        this.getAddressByZipCode(value as string);
      });
    // também pode ser, this.userform.get('address')?.get('zipCode')
  }

  private getAddressByZipCode(zipCode: string): void {
    this.http
      .get<AddressDto>(`https://viacep.com.br/ws/${zipCode}/json/`)
      .pipe(first())
      .subscribe({
        next: (response) => {
          const address: Partial<Address> = {
            zipCode: response.cep,
            street: response.logradouro,
            complement: response.complemento,
            city: response.localidade,
            district: response.bairro,
            state: response.uf,
            number: 0,
          };
          this.userForm.controls.address.patchValue({ ...address });
        },
        error: (err) => {
          console.log(err);
        },
      });
  }

  // user: User = {
  //   name: 'Lucas',
  //   email: 'lucaspsantos003@gmail.com',
  //   profession: 'Dev',
  //   documentNumber: '01234567890',
  //   birthDate: '2000-01-01',
  //   monthlyIncome: 1000,
  //   address: {
  //     complement: 'Casa do fundo',
  //     country: 'Brasil',
  //     district: 'Bairro B',
  //     number: 5,
  //     state: 'BA',
  //     street: 'Rua A',
  //     zipCode: '42800049',
  //     city: 'Salvador',
  //   },
  // };

  onSave(): void {
    const user = this.userForm.getRawValue();
    this.http
      .post<User>(this.apiUrl, user)
      .pipe(first())
      .subscribe({
        next: (response) => {
          console.log(response);
        },
        error: (err) => {
          console.log(err);
        },
      });
    console.log(user);
  }
}
