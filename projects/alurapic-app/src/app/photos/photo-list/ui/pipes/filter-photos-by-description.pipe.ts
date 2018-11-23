import { Pipe, PipeTransform } from '@angular/core';
import { Photo } from '../../../shared/domain/photo';

@Pipe({
  name: 'filterPhotosByDescription'
})
export class FilterPhotosByDescriptionPipe implements PipeTransform {

  transform(photos: Photo[], query: string): any {

    if (query) {
      return photos.filter(photo => photo.description.toLowerCase().includes(query));
    }

    return photos;
  }
}
