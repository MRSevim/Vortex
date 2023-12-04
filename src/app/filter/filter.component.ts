import { Component, Output, EventEmitter, Input, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { ProductInterface } from '../Products/products.service';

@Component({
  selector: 'app-filter',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './filter.component.html',
  styleUrl: './filter.component.css',
})
export class FilterComponent implements OnInit {
  @Output() sendFilters = new EventEmitter();
  @Input() movieOrSeries: string = '';

  ngOnInit(): void {
    this.onSubmit();
  }
  filters = {
    type: {
      value: '',
      function: (product: ProductInterface) => {
        return product.type === this.filters.type.value;
      },
    },
    imdb: {
      imdbmax: 0,
      imdbmin: 0,
      function: (product: ProductInterface) => {
        return (
          product.imdb > this.filters.imdb.imdbmin &&
          product.imdb < this.filters.imdb.imdbmax
        );
      },
    },
    year: {
      value: 0,
      function: (product: ProductInterface) => {
        return product.year === this.filters.year.value;
      },
    },
  };

  filterForm = new FormGroup({
    type: new FormControl(this.movieOrSeries),
    imdbmin: new FormControl(1),
    imdbmax: new FormControl(10),
    year: new FormControl(0),
  });

  onSubmit() {
    this.filters.type.value = this.filterForm.value.type as string;
    this.filters.imdb.imdbmax = this.filterForm.value.imdbmax as number;
    this.filters.imdb.imdbmin = this.filterForm.value.imdbmin as number;
    this.filters.year.value = this.filterForm.value.year as unknown as number;

    this.sendFilters.emit(this.filters);
  }
}
