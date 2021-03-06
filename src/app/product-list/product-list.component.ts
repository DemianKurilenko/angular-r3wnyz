import {Component, OnInit} from '@angular/core';

import {ProductService} from '../product.service';
import {CartService} from '../cart.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products;
  constructor(
    private productService: ProductService,
    private cartService: CartService) {
  }

  ngOnInit() {
    this.products = this.productService.getProducts();
  }

  share() {
    window.alert('The product has been shared!');
  }

  onNotify() {
    window.alert('You will be notified when the product goes on sale');
  }

  addToCart(product) {
    window.alert('Added to cart ' + product.name);
    this.cartService.addToCart(product);
  }

}
