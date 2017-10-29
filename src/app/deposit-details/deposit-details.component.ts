import { Deposit } from './../entities/deposit';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute, ParamMap  } from '@angular/router';

import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-deposit-details',
  templateUrl: './deposit-details.component.html',
  styleUrls: ['./deposit-details.component.css']
})
export class DepositDetailsComponent implements OnInit {

  allDeposits: Deposit[];
  deposit: Deposit;

    currencies = {
    'rub': 'руб',
    'eur': 'евро',
    'usd': 'долл. США'
  };

  constructor(private http: HttpClient,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.http.get<Deposit[]>('/api/deposits')
      .subscribe(d => {
        this.allDeposits = d;

        this.route.paramMap
        .subscribe((params: ParamMap) => {
          for (const depo of this.allDeposits) {
            if (depo.name === params.get('name')) {
              this.deposit = depo;
              return;
            }
          }

          this.router.navigate(['unknown_page']);
        });
      });
  }

  goBack() {
    this.router.navigate(['deposits']);
  }
}
