import { Deposit } from './../../entities/deposit';
import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-calculation-panel',
  templateUrl: './calculation-panel.component.html',
  styleUrls: ['./calculation-panel.component.css']
})
export class CalculationPanelComponent implements OnInit {

  moneyCount: number;
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

  refill: boolean;

  withdrawal: boolean;

  @Output() choose: EventEmitter<any> = new EventEmitter<any>();

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.moneyCount = 600000;
    this.currency = 'rub';
    this.monthCount = 12;
    this.refill = true;
    this.withdrawal = false;
    this.outputMonth = this.monthCount + ' ' + this.monthNames[3];
  }

  changeCurrency(e) {
    this.currency = e.value;
    this.fireChooseEvent();
  }

  changeMoneyCount(e) {
    this.moneyCount = e.value;
    this.fireChooseEvent();
  }

  changeMonthCount(e) {
    this.monthCount = e.value;
    const del = e.value % 10;
    let monthVar = this.monthNames[3];
    if (del === 1 && e.value !== 11) {
      monthVar = this.monthNames[1];
    } else if (del > 1 && del < 5 && e.value < 10 && e.value > 20) {
      monthVar = this.monthNames[2];
    }
    this.outputMonth = e.value + ' ' + monthVar;
    this.fireChooseEvent();
  }

  changeRefillCheckbox(e) {
    this.refill = e.checked;
    this.fireChooseEvent();
  }

  changeWithdrawalCheckbox(e) {
    this.withdrawal = e.checked;
    this.fireChooseEvent();
  }

  fireChooseEvent() {
    const choose = {
      currency: this.currency,
      moneyCount: this.moneyCount,
      monttCount: this.monthCount,
      refill: this.refill,
      withdrawal : this.withdrawal
    };

    this.choose.next(choose);
  }
}
