import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreditCardSystemComponent } from './credit-card-system.component';

describe('CreditCardSystemComponent', () => {
  let component: CreditCardSystemComponent;
  let fixture: ComponentFixture<CreditCardSystemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreditCardSystemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreditCardSystemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
