import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

export class Location {
  lat: number;
  lng: number;

  constructor(lat: number, lng: number) {
    this.lat = lat;
    this.lng = lng;
  }
}

export class SellerArea {
  sellerId: string;
  polygonPaths: Location[];

  constructor(id: string, polygonPaths: Location[]) {
    this.sellerId = id;
    this.polygonPaths = polygonPaths;
  }
}

@Injectable({
  providedIn: 'root'
})
export class BuyerMapService {

  sellersAreas: SellerArea[];

  constructor(private http: HttpClient) { }

  getSellersAreas(city: string) {
  }
}
