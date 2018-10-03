import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskDetailsIdComponent } from './task-details-id.component';

describe('TaskDetailsIdComponent', () => {
  let component: TaskDetailsIdComponent;
  let fixture: ComponentFixture<TaskDetailsIdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaskDetailsIdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskDetailsIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
