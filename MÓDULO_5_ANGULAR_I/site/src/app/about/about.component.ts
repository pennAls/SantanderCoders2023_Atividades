import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { SectionData } from '../models/section-features.model';
import { interval } from 'rxjs';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  @Input() aboutData!: SectionData
  @Output() saveAboutEmitter:EventEmitter<string> = new EventEmitter();

  timer = 5

ngOnInit(): void {
  this.saveAboutEmitter.emit(
    `About.component foi inicializado`
  );
  const interval = setInterval(()=> {
    if(this.timer === 0){
      clearInterval(interval)
    } else{
      this.timer--
    }
  },1000)
}



}

