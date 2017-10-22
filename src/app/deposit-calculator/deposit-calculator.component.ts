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

  constructor(private http: HttpClient) { }

  allDeposits: Deposit[];
  deposits: Observable<CalculatedDeposit[]>;

  currency: string;
  moneyCount: number;
  monthCount: number;
  refill: boolean;
  withdrawal: boolean;

  currencies = {
    'rub': 'руб',
    'eur': 'евро',
    'usd': 'долл. США'
  };

  ngOnInit() {
    this.http.get<Deposit[]>('/api/deposits')
      .subscribe(accounts => {
        this.allDeposits = accounts;

        this.fillCepositsTable(this.allDeposits);
      });

  }

  setUserChoose(e) {
    this.currency = e.currency;
    this.moneyCount = e.moneyCount;
    this.monthCount = e.monthCount;
    this.refill = e.refill;
    this.withdrawal = e.withdrawal;

    if (this.allDeposits) {
      this.fillCepositsTable(this.allDeposits);
    }
  }

  // }

  fillCepositsTable(allDeposits: Deposit[]) {
    const buffer = [];

    for (const d of this.allDeposits) {

      if (d[this.currency]
        && (this.currency === 'rub' && this.moneyCount >= 10000 || this.moneyCount >= 300)
        && this.monthCount >= d.minTermSupport
        && this.monthCount <= d.maxTermSupport
        && (this.refill ? d.refill === this.refill : true)
        && (this.withdrawal ? d.withdrawal === this.withdrawal : true)
      ) {

        const percetage = Math.floor((this.moneyCount * d[this.currency] / 100) / 12 * this.monthCount);
        const sum = this.moneyCount + percetage;
        const calc = {
          name: d.name,
          description: d.description,
          rate: d[this.currency] + '%',
          income: percetage + ' ' + this.currencies[this.currency],
          amountAfterPeriod: sum + ' ' + this.currencies[this.currency],
          capital: d.capital ? 'Да' : '',
          termFr: 'От ' + d.minTermSupport,
          termTo: 'до ' + d.maxTermSupport + ' месяцев'
        };

        buffer.push(calc);

      }
    }
    this.deposits = Observable.of(buffer);
  }
}

export interface CalculatedDeposit {
  name: string;
  description: string;
  rate: string;
  income: string;
  amountAfterPeriod: string;
  capital: string;
  termFr: string;
  termTo: string;
}
