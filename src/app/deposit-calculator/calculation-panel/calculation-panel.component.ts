import { Router } from '@angular/router';
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
  formattedMoneyCout: string;

  currency: string;

  monthCount: number;
  formattedMonthCount: string;
  monthNames = {
    '1': 'месяц',
    '2': 'месяца',
    '3': 'месяцев'
  };

  capitalization: boolean;
  pensioner: boolean;
  onlineopn: boolean;
  refill: boolean;
  withdrawal: boolean;

  minMoneyCount: number;
  maxMountCount: number;

  @Output() choose: EventEmitter<any> = new EventEmitter<any>();

  constructor(private http: HttpClient,
              private router: Router) { }

  ngOnInit() {
    this.moneyCount = 600000;
    this.currency = 'rub';
    this.monthCount = 7;
    this.capitalization = false,
    this.pensioner = false,
    this.onlineopn = true,
    this.refill = false;
    this.withdrawal = false;
    this.formattedMonthCount = this.monthCount + ' ' + this.monthNames[3];
    this.formattedMoneyCout = ('' + this.moneyCount).replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ');

    this.minMoneyCount = 10000;

    this.fireChooseEvent();
  }

  changeCurrency(e) {
    this.currency = e.value;
    this.minMoneyCount = e.value === 'rub' ? 10000 : 300;
    this.fireChooseEvent();
  }

  inputMoneyCount() {
    this.moneyCount = + this.formattedMoneyCout.replace(/\D/g, '');
    this.formattedMoneyCout = ('' + this.moneyCount).replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ');
    this.fireChooseEvent();
  }

  changeMoneyCount(e) {
    this.moneyCount = e.value;
    this.formattedMoneyCout = ('' + this.moneyCount).replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ');
    this.fireChooseEvent();
  }

  changeMonthCount(e) {
    this.monthCount = e.value;
    const del = e.value % 10;
    let monthVar = this.monthNames[3];
    if (del === 1 && e.value !== 11) {
      monthVar = this.monthNames[1];
    } else if (del > 1 && del < 5 && e.value !== 12 && e.value !== 13 && e.value !== 14) {
      monthVar = this.monthNames[2];
    }
    this.formattedMonthCount = e.value + ' ' + monthVar;
    this.fireChooseEvent();
  }

  changeCapitalizationCheckbox(e) {
    this.capitalization = e.checked;
    this.fireChooseEvent();
  }

  changePensionerCheckbox(e) {
    this.pensioner = e.checked;
    this.fireChooseEvent();
  }

  changeOnlineopnCheckbox(e) {
    this.onlineopn = e.checked;
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
      monthCount: this.monthCount,
      capitalization: this.capitalization,
      pensioner: this.pensioner,
      onlineopn: this.onlineopn,
      refill: this.refill,
      withdrawal: this.withdrawal
    };

    this.choose.next(choose);
  }

  gotoMain() {
    this.router.navigate(['main']);
  }
}
