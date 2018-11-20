import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotoListPage } from './photo-list.page';

describe('PhotoListComponent', () => {
  let component: PhotoListPage;
  let fixture: ComponentFixture<PhotoListPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhotoListPage ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhotoListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
