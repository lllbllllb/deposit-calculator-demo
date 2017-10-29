import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  gotoMain() {
    this.router.navigate(['main']);
  }

  gotoIbank() {
    window.location.href = 'http://ibank.alfresco.by/';
  }
}
