import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormenComponent } from './formen.component';

describe('FormenComponent', () => {
  let component: FormenComponent;
  let fixture: ComponentFixture<FormenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
