import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccessControlHomePage } from './home.page';

describe('HomeComponent', () => {
  let component: AccessControlHomePage;
  let fixture: ComponentFixture<AccessControlHomePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccessControlHomePage ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccessControlHomePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
