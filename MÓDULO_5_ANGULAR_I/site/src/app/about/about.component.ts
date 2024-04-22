import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { SectionData } from '../models/section-features.model';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  @Input() aboutData!: SectionData
  @Output() saveAboutEmitter:EventEmitter<string> = new EventEmitter();

ngOnInit(): void {
  this.saveAboutEmitter.emit(
    `About.component foi inicializado`
  );
}
}
