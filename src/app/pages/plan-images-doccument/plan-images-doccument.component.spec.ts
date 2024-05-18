import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanImagesDoccumentComponent } from './plan-images-doccument.component';

describe('PlanImagesDoccumentComponent', () => {
  let component: PlanImagesDoccumentComponent;
  let fixture: ComponentFixture<PlanImagesDoccumentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlanImagesDoccumentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlanImagesDoccumentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
