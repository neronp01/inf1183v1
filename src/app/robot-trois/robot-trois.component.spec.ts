/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { RobotTroisComponent } from './robot-trois.component';

describe('RobotTroisComponent', () => {
  let component: RobotTroisComponent;
  let fixture: ComponentFixture<RobotTroisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RobotTroisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RobotTroisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
