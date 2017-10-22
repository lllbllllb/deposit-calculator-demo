import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main-panel',
  templateUrl: './main-panel.component.html',
  styleUrls: ['./main-panel.component.css']
})
export class MainPanelComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  gotoDeposits() {
    this.router.navigate(['deposits']);
  }
}
