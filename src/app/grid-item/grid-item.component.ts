import { Component, Input } from '@angular/core';
import { ProductInterface } from '../Products/products.service';

@Component({
  selector: 'app-grid-item',
  standalone: true,
  imports: [],
  templateUrl: './grid-item.component.html',
  styleUrl: './grid-item.component.css',
})
export class GridItemComponent {
  @Input() product: ProductInterface = {} as unknown as ProductInterface;
}
