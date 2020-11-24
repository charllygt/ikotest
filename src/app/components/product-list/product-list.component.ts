import { Component, Input, OnInit } from '@angular/core';
import { ShopService } from '@app/modules/shop/shop.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent implements OnInit {
  @Input() products: any;
  constructor() {}

  ngOnInit(): void {}
}
