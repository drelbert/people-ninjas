import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InsightsSidebarComponent } from './insights-sidebar.component';

describe('InsightsSidebarComponent', () => {
  let component: InsightsSidebarComponent;
  let fixture: ComponentFixture<InsightsSidebarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InsightsSidebarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InsightsSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
