import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PhotosInfraModule } from 'alurapic-infra';
import { CardModule } from '../../shared/components/card/card.module';
import { LoadButtonModule } from '../../shared/components/load-button/load-button.module';
import { SearchModule } from '../../shared/components/search/search.module';
import { DarkenOnHoverModule } from '../../shared/directives/darken-on-hover/darken-on-hover.module';
import { PhotoComponent } from './components/photo/photo.component';
import { PhotosComponent } from './components/photos/photos.component';
import { PhotoListPage } from './photo-list.page';
import { FilterPhotosByDescriptionPipe } from './pipes/filter-photos-by-description.pipe';


@NgModule({
    declarations: [PhotoComponent, PhotosComponent, FilterPhotosByDescriptionPipe, PhotoListPage],
    imports: [
        CommonModule,
        LoadButtonModule,
        CardModule,
        SearchModule,
        DarkenOnHoverModule,
        PhotosInfraModule,
    ],
    exports: []
})
export class PhotoListModule { }
