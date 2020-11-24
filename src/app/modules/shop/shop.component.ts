import { Component, OnInit } from '@angular/core';
import { ShopService } from './shop.service';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss'],
  providers: [ShopService],
})
export class ShopComponent implements OnInit {
  products: any;
  constructor(private shopService: ShopService) {}

  ngOnInit(): void {
    this.get();
  }

  get() {
    this.shopService.GetAll().subscribe((products) => (this.products = products));
  }
}
