import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { Iuahcurrency } from 'src/app/models/uahcurrencyI';
import { currencies } from 'src/app/data/uahcurrency';
import { EmailValidator } from '@angular/forms';

@Component({
  selector: 'app-convertor',
  templateUrl: './convertor.component.html',
  styleUrls: ['./convertor.component.scss'],
})
export class ConvertorComponent implements OnInit {
  @Input() currentCurrencyName: string;
  @Input() currentCurrencyVal: Iuahcurrency;
  @Input() multiplier: string = 'Loading...';
  @Input() currentCurrencyToName: string;

  @Output() newCurrency = new EventEmitter<any>();
  @Output() newCurrencyTo = new EventEmitter<any>();

  currencies: any = currencies;
  firstValue: any = 1;
  secondValue: any = 1;

  ngOnInit(): void {
    setTimeout(() => {
      let res: any = 1 * parseFloat(this.multiplier);
      this.secondValue = parseFloat(res).toFixed(2);
    }, 500);
    console.log(this.firstValue);
  }

  OnCurrencySelected(val: string, firstInputval: string) {
    this.newCurrency.emit(val);
    this.secondValue = 'Loading...';
    setTimeout(() => {
      let res: any = parseFloat(firstInputval) * parseFloat(this.multiplier);
      this.secondValue = parseFloat(res).toFixed(2);
    }, 500);
  }
  OnCurrencyToSelected(val: string, firstInputval: string): void {
    this.newCurrencyTo.emit(val);
    this.secondValue = 'Loading...';
    setTimeout(() => {
      let res: any = parseFloat(firstInputval) * parseFloat(this.multiplier);
      this.secondValue = parseFloat(res).toFixed(2);
    }, 500);
  }

  CalculateTo(val: string) {
    if (val) {
      let res: any = parseFloat(val) * parseFloat(this.multiplier);
      this.secondValue = parseFloat(res).toFixed(2);
    } else {
      this.secondValue = '';
    }
  }
  CalculateFrom(val: any) {
    if (val) {
      let res: any = parseFloat(val) / parseFloat(this.multiplier);
      this.firstValue = parseFloat(res).toFixed(2);
    } else {
      this.firstValue = '';
    }
  }
}
