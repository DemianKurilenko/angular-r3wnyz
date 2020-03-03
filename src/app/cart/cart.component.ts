import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { CartService } from '../cart.service';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

items;
checkoutForm;

  constructor(
      private cartService: CartService,
      private formBuilder: FormBuilder
  ) { 
     this.checkoutForm = this.formBuilder.group({
      name: '',
      address: ''
    });
  }

  ngOnInit() {
     this.items = this.cartService.getItems();
  }

   onSubmit(customerData) {
    if (this.items == 0) {
      window.alert('items not found!');
    }
    else {
    this.items = this.cartService.clearCart();
    this.checkoutForm.reset();
    window.alert('You buyed' + this.items);
    console.warn('Your order has been submitted', customerData);
    }
  }

}