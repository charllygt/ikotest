import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ShopService } from '@app/modules/shop/shop.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss'],
  providers: [ShopService],
})
export class ProductDetailComponent implements OnInit {
  productDetail: any;
  constructor(private route: ActivatedRoute, private shopService: ShopService) {}

  ngOnInit(): void {
    const productId = parseInt(this.route.snapshot.paramMap.get('id'), 0);
    this.getProduct(productId);
  }
  getProduct(id: any) {
    this.shopService.GetById(id).subscribe((product) => (this.productDetail = product));
  }

  getImageMain() {
    return this.productDetail.images[0].urlImage;
  }
}
