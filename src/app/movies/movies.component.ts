import { Component, inject } from '@angular/core';
import { GridComponent } from '../grid/grid.component';
import {
  ProductInterface,
  ProductsService,
} from '../Products/products.service';
import { FilterComponent, FilterInterface } from '../filter/filter.component';
import { PaginationComponent } from '../pagination/pagination.component';

@Component({
  selector: 'app-movies',
  standalone: true,
  imports: [GridComponent, FilterComponent, PaginationComponent],
  templateUrl: './movies.component.html',
  styleUrl: './movies.component.css',
})
export class MoviesComponent {
  movie = true;

  filters: FilterInterface = {
    type: {
      value: '',
      function: () => {},
    },
    imdb: {
      imdbmax: 0,
      imdbmin: 10,
      function: () => {},
    },
    year: {
      value: 0,
      function: () => {},
    },
  };

  productsService = inject(ProductsService);
  products: ProductInterface[] = this.productsService.getAllProducts();

  visibleProducts: ProductInterface[] = [];
  filter(event: any) {
    this.products = this.productsService.getAllProducts();
    this.filters = event;

    for (const property in this.filters) {
      if (
        property === 'year' &&
        this.filters[property as keyof typeof this.filters].value === 0
      ) {
        this.products = this.products.filter(() => true);
      } else if (
        property === 'type' &&
        this.filters[property as keyof typeof this.filters].value ===
          'movieandseries'
      ) {
        this.products = this.products.filter(() => true);
      } else
        this.products = this.products.filter(
          this.filters[property as keyof typeof this.filters].function
        );
    }
    this.onPageNumberChange(1);
  }
  onPageNumberChange(event: number) {
    this.visibleProducts = this.products.filter((product) => {
      return (
        this.products.indexOf(product) >= (event - 1) * 10 &&
        this.products.indexOf(product) < event * 10
      );
    });
  }
}
