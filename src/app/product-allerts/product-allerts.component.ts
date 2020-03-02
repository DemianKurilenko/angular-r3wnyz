import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-product-allerts',
  templateUrl: './product-allerts.component.html',
  styleUrls: ['./product-allerts.component.css']
})
export class ProductAllertsComponent implements OnInit {

 @Input() producto;
 @Output() notify = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

}