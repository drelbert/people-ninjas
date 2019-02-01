import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TheNinjasComponent } from './the-ninjas.component';

describe('TheNinjasComponent', () => {
  let component: TheNinjasComponent;
  let fixture: ComponentFixture<TheNinjasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TheNinjasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TheNinjasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
