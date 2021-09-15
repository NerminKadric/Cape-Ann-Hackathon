import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatusValidationComponent } from './status-validation.component';

describe('StatusValidationComponent', () => {
  let component: StatusValidationComponent;
  let fixture: ComponentFixture<StatusValidationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StatusValidationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StatusValidationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
