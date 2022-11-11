import { Component, OnInit } from '@angular/core';
import { Iuahcurrency } from 'src/app/models/uahcurrencyI';
import { uahCurrencyService } from './services/uahcurrency.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'convertor';
  uahCurrency: Iuahcurrency = {
    motd: {
      msg: '',
      url: '',
    },
    success: true,
    base: '',
    date: '',
    rates: {},
  };
  currentCurrencyName: string = 'USD';
  currentCurrencyToName: string = 'EUR';
  currentCurrencyVal: Iuahcurrency;
  multiplier: any = 'Loading...';

  constructor(private uahCurrencyService: uahCurrencyService) {}

  changeCurrencyBase(newCurrency: any) {
    this.currentCurrencyName = newCurrency;
    this.uahCurrencyService
      .getUah(this.currentCurrencyName)
      .subscribe((currency) => {
        this.currentCurrencyVal = currency;
        this.multiplier =
          this.currentCurrencyVal.rates[this.currentCurrencyToName];
      });
  }

  changeCurrencyTo(newCurrencyTo: string) {
    this.currentCurrencyToName = newCurrencyTo;
    this.multiplier = this.currentCurrencyVal.rates[this.currentCurrencyToName];
  }

  ngOnInit(): void {
    this.uahCurrencyService.getUah('UAH').subscribe((currency) => {
      this.uahCurrency = currency;
    });
    this.uahCurrencyService
      .getUah(this.currentCurrencyName)
      .subscribe((currency) => {
        this.currentCurrencyVal = currency;
        this.multiplier =
          this.currentCurrencyVal.rates[this.currentCurrencyToName];
      });
  }
}
