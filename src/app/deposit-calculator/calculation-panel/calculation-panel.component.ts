import { Deposit } from './../../entities/deposit';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-calculation-panel',
  templateUrl: './calculation-panel.component.html',
  styleUrls: ['./calculation-panel.component.css']
})
export class CalculationPanelComponent implements OnInit {

  moneyCount: number;
  mounthCount = 12;
  currency: string;
  currencies = {
    'rub': 'руб',
    'eur': 'евро',
    'usd': 'долл. США'
  };

  monthCount: number;
  outputMonth: string;
  monthNames = {
    '1': 'месяц',
    '2': 'месяца',
    '3': 'месяцев'
  };

  deposits: Deposit[];

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.moneyCount = 600000;
    this.currency = 'rub';
    this.outputMonth = 12 + ' ' + this.monthNames[3];

    this.http.get<Deposit[]>('/api/deposits')
    .subscribe(deposits => {
      this.deposits = deposits;
    });
  }

  changeCurrency(e) {
    console.log(this.currency + '1');
    this.currency = e.value;
    console.log(this.currency);
  }

  changeMoneyCount(e) {
    this.moneyCount = e.value;
  //  console.log(e.value);
  }

  changeMonthCount(e) {
    const del = e.value % 10;
    console.log(e.value + ': ' + del);
    let monthVar = this.monthNames[3];
    if (del === 1 && e.value !== 11) {
      monthVar = this.monthNames[1];
    } else if (del > 1 && del < 5 && e.value < 10 && e.value > 20) {
      monthVar = this.monthNames[2];
    }
    this.outputMonth = e.value + ' ' + monthVar;
  }
}
