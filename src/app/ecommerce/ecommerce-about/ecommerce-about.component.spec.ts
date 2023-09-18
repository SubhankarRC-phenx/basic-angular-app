import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EcommerceAboutComponent } from './ecommerce-about.component';

describe('EcommerceAboutComponent', () => {
  let component: EcommerceAboutComponent;
  let fixture: ComponentFixture<EcommerceAboutComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EcommerceAboutComponent]
    });
    fixture = TestBed.createComponent(EcommerceAboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
