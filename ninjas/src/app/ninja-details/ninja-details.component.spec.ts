import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NinjaDetailsComponent } from './ninja-details.component';

describe('NinjaDetailsComponent', () => {
  let component: NinjaDetailsComponent;
  let fixture: ComponentFixture<NinjaDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NinjaDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NinjaDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
