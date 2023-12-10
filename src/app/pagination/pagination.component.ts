import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { ProductInterface } from '../Products/products.service';
import { FormsModule } from '@angular/forms';
import { FiltereventService } from '../filterevent.service';

@Component({
  selector: 'app-pagination',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './pagination.component.html',
  styleUrl: './pagination.component.css',
})
export class PaginationComponent implements OnInit {
  @Input() products: ProductInterface[] = [];
  @Output() pageNumber = new EventEmitter();
  pages: number = 0;
  pagesArray: number[] = [];
  currentPage: number = 1;
  inputPage: number = 4;
  constructor(private filterEvent: FiltereventService) {}
  ngOnInit(): void {
    console.log(this.products);
    this.filterEvent.subject.subscribe((data) => {
      this.onFilterChange();
      console.log(this.products);
    });
  }
  onFilterChange(): void {
    this.pagesArray = [];
    this.pages = Math.ceil(this.products.length / 10);
    for (let i = 0; i < this.pages; i++) {
      this.pagesArray.push(i + 1);
    }
  }
  goToFirstPage() {
    this.currentPage = 1;
    this.pageNumber.emit(this.currentPage);
  }
  goOnePageBelow() {
    if (this.currentPage > 1) {
      this.currentPage--;
    }
    this.pageNumber.emit(this.currentPage);
  }
  goOnePageAbove() {
    if (this.currentPage < this.pages) {
      this.currentPage++;
    }
    this.pageNumber.emit(this.currentPage);
  }
  goToLastPage() {
    this.currentPage = this.pages;
    this.pageNumber.emit(this.currentPage);
  }
  onNumberClick(page: number) {
    this.currentPage = page;
    this.pageNumber.emit(this.currentPage);
  }
  onSubmit() {
    if (this.inputPage > 0 && this.inputPage <= this.pages) {
      this.currentPage = this.inputPage;
    }
    this.pageNumber.emit(this.currentPage);
  }
}
