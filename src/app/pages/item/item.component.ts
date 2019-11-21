import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from 'src/app/services/products.service';
import { ProductDetail } from 'src/app/interfaces/product-detail.interface';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  product: ProductDetail
  id: String

  constructor(private route: ActivatedRoute, public productsService: ProductsService) { }

  ngOnInit() {
    this.route.params.subscribe( parameters => {
      this.id = parameters['id']
      this.productsService.getProduct(parameters['id'])
        .subscribe( (product: ProductDetail) => {
            this.product = product
        })
    })
  }

}
