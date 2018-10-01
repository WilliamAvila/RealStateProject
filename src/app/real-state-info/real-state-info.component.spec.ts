import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RealStateInfoComponent } from './real-state-info.component';

describe('RealStateInfoComponent', () => {
  let component: RealStateInfoComponent;
  let fixture: ComponentFixture<RealStateInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RealStateInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RealStateInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
