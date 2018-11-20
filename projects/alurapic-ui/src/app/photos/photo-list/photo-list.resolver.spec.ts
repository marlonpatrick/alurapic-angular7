import { TestBed } from '@angular/core/testing';
import { PhotoListResolver } from './photo-list.resolver';


describe('PhotoListResolverService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PhotoListResolver = TestBed.get(PhotoListResolver);
    expect(service).toBeTruthy();
  });
});
