import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-seller-root',
  templateUrl: './seller-root.component.html',
  styleUrls: ['./seller-root.component.scss']
})
export class SellerRootComponent implements OnInit {

  constructor(private router: Router) {
  }

  ngOnInit(): void {
  }


}
