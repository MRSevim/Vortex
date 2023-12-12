import { Component } from '@angular/core';
import {
  ProductInterface,
  ProductsService,
} from '../Products/products.service';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-search-bar',
  standalone: true,
  imports: [FormsModule, RouterLink],
  templateUrl: './search-bar.component.html',
  styleUrl: './search-bar.component.css',
})
export class SearchBarComponent {
  products: ProductInterface[] = [];
  visibleProducts: ProductInterface[] = [];
  searchParam = '';
  searching = false;
  constructor(private productsService: ProductsService) {
    this.products = this.productsService.getAllProducts();
  }
  onSearch(event: string) {
    this.visibleProducts = this.products.filter((product) => {
      if (this.searchParam === '') return false;
      return product.name
        .toLowerCase()
        .includes(this.searchParam.toLowerCase());
    });
  }
  onLinkClick() {
    this.searching = false;
    this.searchParam = '';
    this.visibleProducts = [];
  }
  onFocusOut() {
    setTimeout(() => {
      this.searching = false;
    }, 100);
  }
}
