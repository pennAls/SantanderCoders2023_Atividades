import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { SectionFeatures } from '../models/section-features.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  @Input() homeData!: SectionFeatures;
  @Output() saveHomeEmitter: EventEmitter<string> = new EventEmitter();

  ngOnInit(): void {
    this.saveHomeEmitter.emit(
      `Home.component foi inicializado`
    );
  }
}
