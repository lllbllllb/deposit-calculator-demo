import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/observable/of';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {

  currentExchangeRate: Observable<CurrencyExchangeInfo[]>;
  currencies = {
    'usd': 'Доллар США',
    'eur': 'Евро',
    'gbr': 'Фунт стерлингов Соединенного королевства',
    'chf': 'Швейцарский франк'
  };

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get<any[]>('/api/currentExchangeRate')
      .subscribe(curr => {
        this.fillRate(curr);
      });
  }

  fillRate(curr: any[]) {

    const buff = [];

    for (const c of curr) {
      const info = {
        id: c.id,
        code: c.code,
        name: this.currencies[c.code],
        rateBuy: c.rateBuy,
        rateSal: c.rateSal,
        updateTime: new Date().toLocaleString('ru-RU')
      };

      buff.push(info);
    }

    this.currentExchangeRate = Observable.of(buff);
  }
}

export interface CurrencyExchangeInfo {
  id: number;
  code: string;
  name: string;
  rateBuy: string;
  rateSal: string;
  updateTime: string;
}
