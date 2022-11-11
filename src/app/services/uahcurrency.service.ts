import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Iuahcurrency } from '../models/uahcurrencyI';

@Injectable({
  providedIn: 'root',
})
export class uahCurrencyService {
  constructor(private http: HttpClient) {}

  getUah(base: string): Observable<Iuahcurrency> {
    return this.http.get<Iuahcurrency>('https://api.exchangerate.host/latest', {
      params: new HttpParams().append('base', base),
    });
  }
}
