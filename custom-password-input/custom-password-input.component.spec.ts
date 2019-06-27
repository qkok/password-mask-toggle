import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomPasswordInputComponent } from './custom-password-input.component';

describe('CustomPasswordInputComponent', () => {
  let component: CustomPasswordInputComponent;
  let fixture: ComponentFixture<CustomPasswordInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomPasswordInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomPasswordInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
