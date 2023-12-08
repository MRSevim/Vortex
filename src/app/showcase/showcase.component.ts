import { Component, Input, OnInit } from '@angular/core';
import { ProductInterface } from '../Products/products.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-showcase',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './showcase.component.html',
  styleUrl: './showcase.component.css',
})
export class ShowcaseComponent implements OnInit {
  @Input() data: ProductInterface[] = [];
  indexX = 'translateX(0)';
  index = 0;

  floor(number: number): number {
    return Math.floor(number);
  }

  goRight() {
    let allElements = document.querySelectorAll('.element');
    let middleElement = document.querySelectorAll('.element')[this.index];
    if (this.index < allElements.length - 1) {
      middleElement.classList.remove('center-element');
      allElements.forEach((element) => {
        element.classList.remove('hidden');
      });
      this.index++;
      allElements[this.index].classList.add('center-element');
      allElements.forEach((element, index) => {
        if (
          index !== this.index &&
          index !== this.index + 1 &&
          index !== this.index - 1
        ) {
          element.classList.add('hidden');
        }
      });
    }
    this.indexX = `translateX(${-((this.index - 2) * 370)}px)`;
  }
  goLeft() {
    let allElements = document.querySelectorAll('.element');
    let middleElement = document.querySelectorAll('.element')[this.index];
    if (this.index > 0) {
      middleElement.classList.remove('center-element');
      allElements.forEach((element) => {
        element.classList.remove('hidden');
      });
      this.index--;
      console.log(this.index);
      allElements[this.index].classList.add('center-element');
      allElements.forEach((element, index) => {
        if (
          index !== this.index &&
          index !== this.index + 1 &&
          index !== this.index - 1
        ) {
          element.classList.add('hidden');
        }
      });
      this.indexX = `translateX(${this.index * 370}px)`;
    }
  }

  ngOnInit(): void {
    this.index = this.floor(this.data.length / 2);
  }
}
