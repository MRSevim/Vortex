import { Component, inject, OnInit } from '@angular/core';
import { ShowcaseComponent } from '../showcase/showcase.component';

import {
  ProductsService,
  ProductInterface,
} from '../Products/products.service';
import { AlikeProductsComponent } from '../alike-products/alike-products.component';

@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [ShowcaseComponent, AlikeProductsComponent],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.css',
})
export class HomepageComponent implements OnInit {
  productsService = inject(ProductsService);
  showcase: ProductInterface[] = [];
  alike1: ProductInterface[] = [];
  alike2: ProductInterface[] = [];
  ngOnInit(): void {
    this.showcase = this.productsService.getShowcaseProducts();
    this.alike1 = this.productsService.getAlikeProducts();
    this.alike2 = this.productsService.getAlikeProducts();
  }
}
