import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinCapMarketComponent } from './fin-cap-market.component';

describe('FinCapMarketComponent', () => {
  let component: FinCapMarketComponent;
  let fixture: ComponentFixture<FinCapMarketComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FinCapMarketComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FinCapMarketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
