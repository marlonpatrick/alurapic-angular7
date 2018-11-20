import { FilterPhotosByDescriptionPipe } from './filter-photos-by-description.pipe';

describe('FilterPhotosByDescriptionPipe', () => {
  it('create an instance', () => {
    const pipe = new FilterPhotosByDescriptionPipe();
    expect(pipe).toBeTruthy();
  });
});
