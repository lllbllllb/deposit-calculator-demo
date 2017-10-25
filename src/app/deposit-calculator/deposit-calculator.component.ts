import { Router } from '@angular/router';
import { Deposit } from './../entities/deposit';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/observable/of';

@Component({
  selector: 'app-deposit-calculator',
  templateUrl: './deposit-calculator.component.html',
  styleUrls: ['./deposit-calculator.component.css']
})
export class DepositCalculatorComponent implements OnInit {

  constructor(private http: HttpClient,
    private router: Router) { }

  allDeposits: Deposit[];
  deposits: Observable<CalculatedDeposit[]>;

  currency: string;
  moneyCount: number;
  monthCount: number;
  capitalization: boolean;
  pensioner: boolean;
  onlineopn: boolean;
  refill: boolean;
  withdrawal: boolean;

  currencies = {
    'rub': '₽',
    'eur': '€',
    'usd': '$'
  };

  ngOnInit() {
    this.http.get<Deposit[]>('/api/deposits')
      .subscribe(deposits => {
        this.allDeposits = deposits;

        this.fillCepositsTable(this.allDeposits);
      });
  }

  setUserChoose(e) {
    this.currency = e.currency;
    this.moneyCount = e.moneyCount;
    this.monthCount = e.monthCount;
    this.capitalization = e.capitalization;
    this.pensioner = e.pensioner;
    this.onlineopn = e.onlineopn;
    this.refill = e.refill;
    this.withdrawal = e.withdrawal;

    if (this.allDeposits) {
      this.fillCepositsTable(this.allDeposits);
    }
  }

  fillCepositsTable(allDeposits: Deposit[]) {
    const buffer = [];

    for (const d of this.allDeposits) {

      if (d[this.currency]
        && (this.currency === 'rub' && this.moneyCount >= 10000 || this.moneyCount >= 300)
        && this.monthCount >= d.minTermSupport
        && this.monthCount <= d.maxTermSupport
        && (this.refill ? d.refill === this.refill : true)
        && (this.withdrawal ? d.withdrawal === this.withdrawal : true)
        && (this.capitalization ? d.capital === this.capitalization : true)
      ) {

        const percetage = Math.floor((this.moneyCount * d[this.currency] / 100) / 12 * this.monthCount);
        const sum = this.moneyCount + percetage;
        const calc = {
          name: d.name,
          description: d.description,
          rate: this.calculateRate(d) + '%',
          profit: this.formatOutputNumber(this.calculateProfit(d) - this.moneyCount) + this.currencies[this.currency],
          amountAfterPeriod: this.formatOutputNumber(this.calculateProfit(d)) + this.currencies[this.currency],
          capital: d.capital ? 'Да' : '',
          termFr: 'От ' + d.minTermSupport,
          termTo: 'до ' + d.maxTermSupport + ' месяцев'
        };

        buffer.push(calc);

      }
    }
    this.deposits = Observable.of(buffer);
  }

  calculateRate(d: Deposit): number {
    const mainRate = +d[this.currency];
    const pensionerRate = this.pensioner && d['pensioner'] ? d['pensioner'] : 0;
    const onlineopRate = this.onlineopn && d['onlineopn'] ? d['onlineopn'] : 0;

    return +mainRate + +pensionerRate + +onlineopRate;
  }

  calculateProfit(d: Deposit): number {
    let total = this.moneyCount;
    let rate = this.calculateRate(d) / 100;
    if (d.capital) {
      rate = +1 + rate / 12;
      for (let i = 0; i < this.monthCount; i++) {
        total = total * rate;
      }
      return Math.floor(total);
    } else {
      rate = +1 + rate;
      return Math.floor(total * this.monthCount * rate);
    }
  }

  formatOutputNumber(n: number): string {
    return ('' + n).replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ') + ' ';
  }

  onSelectDeposit(deposit: Deposit) {
    this.router.navigate(['deposits', deposit.name]);
  }
}

export interface CalculatedDeposit {
  name: string;
  description: string;
  rate: string;
  profit: string;
  amountAfterPeriod: string;
  capital: string;
  termFr: string;
  termTo: string;
}
