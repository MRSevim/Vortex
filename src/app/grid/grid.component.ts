import { Component, Input } from '@angular/core';
import { ProductInterface } from '../Products/products.service';
import { GridItemComponent } from '../grid-item/grid-item.component';

@Component({
  selector: 'app-grid',
  standalone: true,
  imports: [GridItemComponent],
  templateUrl: './grid.component.html',
  styleUrl: './grid.component.css',
})
export class GridComponent {
  @Input() products: ProductInterface[] = [] as unknown as ProductInterface[];
}
