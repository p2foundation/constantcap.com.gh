import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrincInvestmentComponent } from './princ-investment.component';

describe('PrincInvestmentComponent', () => {
  let component: PrincInvestmentComponent;
  let fixture: ComponentFixture<PrincInvestmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrincInvestmentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrincInvestmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
