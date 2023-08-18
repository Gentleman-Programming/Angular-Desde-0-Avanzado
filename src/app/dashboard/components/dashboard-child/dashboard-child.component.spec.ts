import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardChildComponent } from './dashboard-child.component';

describe('DashboardChildComponent', () => {
  let component: DashboardChildComponent;
  let fixture: ComponentFixture<DashboardChildComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [DashboardChildComponent]
    });
    fixture = TestBed.createComponent(DashboardChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
