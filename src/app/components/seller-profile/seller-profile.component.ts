import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-seller-profile',
  templateUrl: './seller-profile.component.html',
  styleUrls: ['./seller-profile.component.scss']
})

export class SellerProfileComponent implements OnInit {
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
