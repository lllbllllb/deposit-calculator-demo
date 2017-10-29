import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-not-available',
  templateUrl: './page-not-available.component.html',
  styleUrls: ['./page-not-available.component.css']
})
export class PageNotAvailableComponent implements OnInit {

  showPage = true;

  constructor(private router: Router) { }

  ngOnInit() { }

  gotoMain() {
    this.router.navigate(['main']);
  }
}
