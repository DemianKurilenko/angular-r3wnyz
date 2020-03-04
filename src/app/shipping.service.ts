import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ShippingService {

  constructor(
    private http: HttpClient
  ) { }

  getShippingPrices() {
    return this.http.get('http://localhost:8080/shipping');
  }
}
