import { Component, Input } from '@angular/core';
import { ProductInterface } from '../Products/products.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-alike-products',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './alike-products.component.html',
  styleUrl: './alike-products.component.css',
})
export class AlikeProductsComponent {
  @Input() data: ProductInterface[] = [];
  sliderTransform = 'translateX(0%)';
  index = 0;

  goRight() {
    if (this.index < this.data.length / 5 - 1) {
      this.index++;
      this.sliderTransform = `translateX(-${this.index * 100}%)`;
    }
  }
  goLeft() {
    if (this.index > 0) {
      this.index--;
      this.sliderTransform = `translateX(-${this.index * 100}%)`;
    }
  }
}
