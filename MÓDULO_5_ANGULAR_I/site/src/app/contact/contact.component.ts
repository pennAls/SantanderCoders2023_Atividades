import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { SectionContact } from '../models/section-features.model';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent implements OnInit {
  @Input() contactData!: SectionContact;
  @Output() saveDataEmitter: EventEmitter<SectionContact> = new EventEmitter();
  @Output() saveInfoEmitter: EventEmitter<string> = new EventEmitter();

  ngOnInit(): void {
    this.saveInfoEmitter.emit(`Contact.component foi inicializado`);
    setTimeout(() => {
      this.contactData.email = 'issoémuitocomplicado@gmail.com';
      this.contactData.message = 'É só se esforçar rpz';
    }, 3000);
  }

  saveData(): void {
    this.saveDataEmitter.emit(this.contactData);
  }
}
