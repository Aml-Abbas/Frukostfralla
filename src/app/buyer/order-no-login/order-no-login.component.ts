import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-order-no-login',
  templateUrl: './order-no-login.component.html',
  styleUrls: ['./order-no-login.component.scss']
})
export class OrderNoLoginComponent implements OnInit {


  router: Router;

  title = 'Bekräftelse';
  name = '';
  street = '';
  city = '';
  number = '';
  hide = true;

  constructor(router: Router) {
    this.router = router;

  }

  ngOnInit(): void {
  }

}
