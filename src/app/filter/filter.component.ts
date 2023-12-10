import { Component, Output, EventEmitter, Input, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { ProductInterface } from '../Products/products.service';

export interface FilterInterface {
  [key: string]: any;
}

@Component({
  selector: 'app-filter',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './filter.component.html',
  styleUrl: './filter.component.css',
})
export class FilterComponent implements OnInit {
  @Output() sendFilters = new EventEmitter();
  @Input() movie: boolean = false;
  @Input() series: boolean = false;

  type = '';

  ngOnInit(): void {
    this.filterForm.patchValue({ movie: this.movie });
    this.filterForm.patchValue({ series: this.series });
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
      imdbmax: 10,
      imdbmin: 0,
      function: (product: ProductInterface) => {
        return (
          product.imdb >= this.filters.imdb.imdbmin &&
          product.imdb <= this.filters.imdb.imdbmax
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
    movie: new FormControl(false),
    series: new FormControl(false),
    imdbmin: new FormControl(0),
    imdbmax: new FormControl(10),
    year: new FormControl(0),
  });

  onSubmit() {
    if (this.filterForm.value.movie && this.filterForm.value.series) {
      this.type = 'movieandseries';
    } else if (this.filterForm.value.movie) {
      this.type = 'movie';
    } else if (this.filterForm.value.series) {
      this.type = 'series';
    } else {
      this.type = '';
      this.filters.type.value = this.type;
    }
    if (this.type !== '') {
      this.filters.type.value = this.type;
    }
    if (this.filterForm.value.imdbmax && this.filterForm.value.imdbmin) {
      this.filters.imdb.imdbmax = this.filterForm.value.imdbmax;
      this.filters.imdb.imdbmin = this.filterForm.value.imdbmin;
    }
    if (this.filterForm.value.imdbmax === null) {
      this.filters.imdb.imdbmin = this.filterForm.value.imdbmin as number;
      this.filters.imdb.imdbmax = 10;
    }
    if (
      this.filterForm.value.imdbmin === null ||
      this.filterForm.value.imdbmin === 0
    ) {
      this.filters.imdb.imdbmax = this.filterForm.value.imdbmax as number;
      this.filters.imdb.imdbmin = 0;
    }
    if (typeof this.filterForm.value.year === 'number') {
      this.filters.year.value = this.filterForm.value.year;
    }

    this.sendFilters.emit(this.filters);
  }
  onClearFilters() {
    this.filterForm.patchValue({ movie: this.movie });
    this.filterForm.patchValue({ series: this.series });
    this.filterForm.patchValue({ imdbmax: 10 });
    this.filterForm.patchValue({ imdbmin: 0 });
    this.filterForm.patchValue({ year: 0 });
    this.onSubmit();
  }
}
