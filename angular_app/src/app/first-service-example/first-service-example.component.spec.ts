import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstServiceExampleComponent } from './first-service-example.component';

describe('FirstServiceExampleComponent', () => {
  let component: FirstServiceExampleComponent;
  let fixture: ComponentFixture<FirstServiceExampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FirstServiceExampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FirstServiceExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
