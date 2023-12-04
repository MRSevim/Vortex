import { Component, inject } from '@angular/core';
import { GridComponent } from '../grid/grid.component';
import {
  ProductInterface,
  ProductsService,
} from '../Products/products.service';
import { FilterComponent } from '../filter/filter.component';

@Component({
  selector: 'app-movies',
  standalone: true,
  imports: [GridComponent, FilterComponent],
  templateUrl: './movies.component.html',
  styleUrl: './movies.component.css',
})
export class MoviesComponent {
  filters = {
    type: {
      value: '',
      function: () => {},
    },
    imdb: {
      imdbmax: 0,
      imdbmin: 0,
      function: () => {},
    },
    year: {
      value: 0,
      function: () => {},
    },
  };
  yearFilter = () => {};

  productsService = inject(ProductsService);
  products: ProductInterface[] = this.productsService.getAllProducts();
  filter(event: any) {
    this.filters = event;
    if (this.filters.year.value === 0) {
      this.yearFilter = () => {
        return true;
      };
    }
  }
}
