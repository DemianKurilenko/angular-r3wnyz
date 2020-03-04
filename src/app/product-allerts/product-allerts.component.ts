import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-product-allerts',
  templateUrl: './product-allerts.component.html',
  styleUrls: ['./product-allerts.component.css']
})
export class ProductAllertsComponent implements OnInit {

  @Input() producto;
  @Output() notify = new EventEmitter();

  constructor() {
  }

  ngOnInit() {
  }

}
