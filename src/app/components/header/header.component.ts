import { Component, Input } from '@angular/core';
import { Iuahcurrency } from 'src/app/models/uahcurrencyI';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  @Input() uahCurrency: Iuahcurrency;
}
