import { Component, inject, OnInit } from '@angular/core';
import { ShowcaseComponent } from '../showcase/showcase.component';

import {
  ProductsService,
  ProductInterface,
} from '../Products/products.service';

@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [ShowcaseComponent],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.css',
})
export class HomepageComponent implements OnInit {
  productsService = inject(ProductsService);
  showcase: ProductInterface[] = [];
  ngOnInit(): void {
    this.showcase = this.productsService.getShowcaseProducts();
  }
}
