import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ListPhotosFromUserQuery } from 'alurapic-domain';
import { RestListPhotosFromUserQuery } from './rest.list-photos-from-user.query';


@NgModule({
  declarations: [],
  imports: [
    HttpClientModule
  ],
  providers: [
    { provide: ListPhotosFromUserQuery, useClass: RestListPhotosFromUserQuery }
  ],
  exports: []
})
export class PhotosInfraModule { }
