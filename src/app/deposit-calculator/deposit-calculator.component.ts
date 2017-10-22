import { Deposit } from './../entities/deposit';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-deposit-calculator',
  templateUrl: './deposit-calculator.component.html',
  styleUrls: ['./deposit-calculator.component.css']
})
export class DepositCalculatorComponent implements OnInit {

  constructor(private http: HttpClient) { }

  allDeposits: Deposit[];
  deposits: Deposit[];

  ngOnInit() {
    this.http.get<Deposit[]>('/api/deposits')
      .subscribe(accounts => {
        this.deposits = accounts;
      });
  }

  setUserChoose(e) {
    console.log(e.currency);
  }
}
