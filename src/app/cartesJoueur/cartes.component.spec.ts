/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CartesComponent } from './cartes.component';

describe('CartesComponent', () => {
  let component: CartesComponent;
  let fixture: ComponentFixture<CartesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CartesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CartesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
