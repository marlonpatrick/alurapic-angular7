import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundPage } from './errors/not-found/not-found.page';
import { PhotoFormPage } from './photos/photo-form/photo-form.page';
import { PhotoListPage } from './photos/photo-list/photo-list.page';
import { PhotoListResolver } from './photos/photo-list/photo-list.resolver';
import { SignInPage } from './access-control/sign-in/sign-in.page';

const routes: Routes = [
  { path: '', component: SignInPage },
  {
    path: 'user/:userName', component: PhotoListPage, resolve: {
      photos: PhotoListResolver
    }
  },
  { path: 'p/add', component: PhotoFormPage },
  { path: '**', component: NotFoundPage }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
