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

  floor(number: number): number {
    return Math.floor(number);
  }

  goRight() {
    this.data.push(this.data.shift() as ProductInterface);
  }
  goLeft() {
    this.data.unshift(this.data[this.data.length - 1]);
    this.data.pop();
  }

  ngOnInit(): void {}
}
