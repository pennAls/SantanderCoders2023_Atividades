import { Component, OnInit } from '@angular/core';
import { Observable, first, take } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  //EXEMPLO DE OBSERVABLE
  obs = new Observable((observer) => {
    console.log('Inicio');

    // observer.next('1');
    // setTimeout(() => {
    //   observer.next('2');
    // }, 4000);
    // setTimeout(() => {
    //   observer.next('3');
    // }, 2000);
    // observer.next('4');
    // setTimeout(() => {
    //   observer.next('5');
    // }, 1000);
    // setTimeout(() => {
    //   observer.next('6');
    // }, 5000);
    // setTimeout(() => {}, 1000);
    // observer.next('7');

    let cont = 0;
    setInterval(() => {
      observer.next(cont++);
    }, 1000);
  });

  ngOnInit(): void {
    this.obs.pipe(take(10)).subscribe({
      //O subscribe se inscreve no observable para receber as atualizações disparadas

      //Use pipes to transform strings, currency amounts, dates, and other data for display. Pipes are simple functions to use in template expressions to accept an input value and return a transformed value.
      next: (response) => {
        console.log(response);
      },
      error: (err) => {
        console.log(err);
      },
      complete: () => {
        console.log('Fim');
      },
    });
  }
}
