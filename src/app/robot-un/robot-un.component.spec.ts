/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { RobotUnComponent } from './robot-un.component';

describe('RobotUnComponent', () => {
  let component: RobotUnComponent;
  let fixture: ComponentFixture<RobotUnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RobotUnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RobotUnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
