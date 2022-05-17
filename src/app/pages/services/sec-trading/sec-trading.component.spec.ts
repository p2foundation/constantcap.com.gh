import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecTradingComponent } from './sec-trading.component';

describe('SecTradingComponent', () => {
  let component: SecTradingComponent;
  let fixture: ComponentFixture<SecTradingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SecTradingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SecTradingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
