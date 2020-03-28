import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrivateOfficeComplexComponent } from './private-office-complex.component';

describe('PrivateOfficeComplexComponent', () => {
  let component: PrivateOfficeComplexComponent;
  let fixture: ComponentFixture<PrivateOfficeComplexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrivateOfficeComplexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrivateOfficeComplexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
