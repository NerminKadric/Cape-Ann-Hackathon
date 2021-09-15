import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReqsatusComponent } from './reqsatus.component';

describe('ReqsatusComponent', () => {
  let component: ReqsatusComponent;
  let fixture: ComponentFixture<ReqsatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReqsatusComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReqsatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
