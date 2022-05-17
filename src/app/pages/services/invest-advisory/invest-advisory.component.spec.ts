import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvestAdvisoryComponent } from './invest-advisory.component';

describe('InvestAdvisoryComponent', () => {
  let component: InvestAdvisoryComponent;
  let fixture: ComponentFixture<InvestAdvisoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InvestAdvisoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InvestAdvisoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
