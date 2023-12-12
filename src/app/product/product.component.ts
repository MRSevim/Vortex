import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {
  ProductInterface,
  ProductsService,
} from '../Products/products.service';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css',
})
export class ProductComponent implements OnInit {
  product: ProductInterface = {} as ProductInterface;
  productStarsImg = '';

  constructor(
    private productsService: ProductsService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    const productIdFromRoute = Number(routeParams.get('productId'));
    this.product = this.productsService.getProductById(
      productIdFromRoute
    ) as ProductInterface;
    this.productStarsImg = `../assets/stars-images/${this.product.stars}-stars.jpg`;
  }
}
