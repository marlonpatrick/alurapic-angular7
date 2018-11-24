import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CardModule } from '../../shared/components/card/card.module';
import { LoadButtonModule } from '../../shared/components/load-button/load-button.module';
import { SearchModule } from '../../shared/components/search/search.module';
import { DarkenOnHoverModule } from '../../shared/directives/darken-on-hover/darken-on-hover.module';
import { ListPhotosFromUserQueryGateway } from './domain/list-photos-from-user.query.gateway';
import { RestListPhotosFromUserQuery } from './infra/rest-list-photos-from-user.query';
import { PhotoListPage } from './ui/photo-list.page';
import { PhotoComponent } from './ui/components/photo/photo.component';
import { PhotosComponent } from './ui/components/photos/photos.component';
import { FilterPhotosByDescriptionPipe } from './ui/pipes/filter-photos-by-description.pipe';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
    declarations: [PhotoComponent, PhotosComponent, FilterPhotosByDescriptionPipe, PhotoListPage],

    providers: [
        { provide: ListPhotosFromUserQueryGateway, useClass: RestListPhotosFromUserQuery }
    ],

    imports: [
        CommonModule,
        HttpClientModule,
        LoadButtonModule,
        CardModule,
        SearchModule,
        DarkenOnHoverModule
    ],

    exports: []
})
export class PhotoListModule { }
