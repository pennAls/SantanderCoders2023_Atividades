import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { SectionData } from '../models/section-features.model';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.css'],
})
export class AddressComponent implements OnInit {
  @Input() addressData!: SectionData;
 
  @Output() saveAddressEmmiter: EventEmitter<string> = new EventEmitter();

  ngOnInit(): void {
    this.saveAddressEmmiter.emit(
      `Address.component foi inicializado`
    );
  }

  
}
