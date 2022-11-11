import {
  Component,
  Input,
  Output,
  EventEmitter,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { Iuahcurrency } from 'src/app/models/uahcurrencyI';
import { currencies } from 'src/app/data/currencies';
import { EmailValidator } from '@angular/forms';

@Component({
  selector: 'app-convertor',
  templateUrl: './convertor.component.html',
  styleUrls: ['./convertor.component.scss'],
})
export class ConvertorComponent implements OnChanges, OnInit {
  @Input() currentCurrencyName: string;
  @Input() currentCurrencyVal: Iuahcurrency;
  @Input() multiplier: string;
  @Input() currentCurrencyToName: string;

  @Output() newCurrency = new EventEmitter<any>();
  @Output() newCurrencyTo = new EventEmitter<any>();

  currencies: any = currencies;
  firstValue: any = 1;
  secondValue: any = 1;
  firstCurrentValue: any = 1;

  ngOnInit() {
    this.currentCurrencyName = 'USD';
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (typeof changes['multiplier'] != 'undefined') {
      if (
        changes['multiplier'].previousValue !=
        changes['multiplier'].currentValue
      ) {
        this.resetSecondInput(this.firstCurrentValue);
      }
    }
  }

  OnCurrencySelected(val: string, firstInputval: string) {
    this.secondValue = 'Loading...';
    this.newCurrency.emit(val);
  }
  OnCurrencyToSelected(val: string, firstInputval: string): void {
    this.secondValue = 'Loading...';
    this.newCurrencyTo.emit(val);
  }

  CalculateTo(val: string) {
    this.firstCurrentValue = val;
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

  resetSecondInput(firstInputval: string): void {
    let res: any = parseFloat(firstInputval) * parseFloat(this.multiplier);
    this.secondValue = parseFloat(res).toFixed(2);
  }
}
