import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ForwomenComponent } from './forwomen.component';

describe('ForwomenComponent', () => {
  let component: ForwomenComponent;
  let fixture: ComponentFixture<ForwomenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ForwomenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ForwomenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
