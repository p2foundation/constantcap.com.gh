import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvestResearchComponent } from './invest-research.component';

describe('InvestResearchComponent', () => {
  let component: InvestResearchComponent;
  let fixture: ComponentFixture<InvestResearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InvestResearchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InvestResearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
