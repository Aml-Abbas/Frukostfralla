import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';


@Component({
  selector: 'app-buyer-profile',
  templateUrl: './buyer-profile.component.html',
  styleUrls: ['./buyer-profile.component.scss']
})
export class BuyerProfileComponent implements OnInit {
  title = 'Min profil';
  router: Router;

  constructor(router: Router) {
    this.router = router;
  }

  ngOnInit(): void {
  }

  public navigateToProfileEditor(): void {
    this.router.navigate(['/seller-profile-editor']);
  }


}
