import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StraAdvisoryComponent } from './stra-advisory.component';

describe('StraAdvisoryComponent', () => {
  let component: StraAdvisoryComponent;
  let fixture: ComponentFixture<StraAdvisoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StraAdvisoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StraAdvisoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
