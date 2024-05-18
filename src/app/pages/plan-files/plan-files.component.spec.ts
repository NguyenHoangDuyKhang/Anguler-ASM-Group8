import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanFilesComponent } from './plan-files.component';

describe('PlanFilesComponent', () => {
  let component: PlanFilesComponent;
  let fixture: ComponentFixture<PlanFilesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlanFilesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlanFilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
