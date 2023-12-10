import { Component, Input } from '@angular/core';
import { ProductInterface } from '../Products/products.service';

@Component({
  selector: 'app-alike-products',
  standalone: true,
  imports: [],
  templateUrl: './alike-products.component.html',
  styleUrl: './alike-products.component.css',
})
export class AlikeProductsComponent {
  @Input() data: ProductInterface[] = [];
}
