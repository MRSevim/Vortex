import { Component, Input } from '@angular/core';
import { ProductInterface } from '../Products/products.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-showcase',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './showcase.component.html',
  styleUrl: './showcase.component.css',
})
export class ShowcaseComponent {
  @Input() data: ProductInterface[] = [];
  sliderTransform = 'translateX(-20%)';
  index = 0;
  allElements = document.querySelectorAll<HTMLElement>('.element');
  middleElement = this.allElements[this.index];

  floor(number: number): number {
    return Math.floor(number);
  }

  goRight() {
    this.allElements = document.querySelectorAll('.element');
    if (this.index < this.allElements.length - 1) {
      this.middleElement = this.allElements[this.index];
      this.middleElement.classList.remove('center-element');
      this.index++;
      this.allElements[this.index].classList.add('center-element');
      this.sliderTransform = `translateX(${-(this.index - 1) * 20}%)`;
    }
  }
  goLeft() {
    this.allElements = document.querySelectorAll('.element');
    if (this.index > 0) {
      this.middleElement = this.allElements[this.index];
      this.middleElement.classList.remove('center-element');
      this.index--;
      this.allElements[this.index].classList.add('center-element');
      this.sliderTransform = `translateX(${-(this.index - 1) * 20}%)`;
    }
  }
  ngOnInit(): void {
    this.index = this.floor(this.data.length / 2);
  }
}
