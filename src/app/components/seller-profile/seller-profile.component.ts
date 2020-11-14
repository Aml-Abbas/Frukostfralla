import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-seller-profile',
  templateUrl: './seller-profile.component.html',
  styleUrls: ['./seller-profile.component.scss']
})

export class SellerProfileComponent implements OnInit {
  title = 'Min profil';

  constructor() {
  }

  ngOnInit(): void {
  }

}
