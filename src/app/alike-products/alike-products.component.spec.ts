import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlikeProductsComponent } from './alike-products.component';

describe('AlikeProductsComponent', () => {
  let component: AlikeProductsComponent;
  let fixture: ComponentFixture<AlikeProductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AlikeProductsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AlikeProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
