import { Component, inject } from '@angular/core';
import { GridComponent } from '../grid/grid.component';
import {
  ProductInterface,
  ProductsService,
} from '../Products/products.service';
import { FilterComponent, FilterInterface } from '../filter/filter.component';

@Component({
  selector: 'app-movies',
  standalone: true,
  imports: [GridComponent, FilterComponent],
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
  }
}