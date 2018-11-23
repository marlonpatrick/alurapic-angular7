import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotoFormPage } from './photo-form.page';

describe('PhotoFormComponent', () => {
  let component: PhotoFormPage;
  let fixture: ComponentFixture<PhotoFormPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhotoFormPage ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhotoFormPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
