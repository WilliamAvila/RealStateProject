import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventHallComponent } from './event-hall.component';

describe('EventHallComponent', () => {
  let component: EventHallComponent;
  let fixture: ComponentFixture<EventHallComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventHallComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventHallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
