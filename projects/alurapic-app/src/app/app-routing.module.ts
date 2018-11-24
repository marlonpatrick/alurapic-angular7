import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundPage } from './errors/not-found/ui/not-found.page';
import { PhotoFormPage } from './photos/photo-form/ui/photo-form.page';
import { PhotoListPage } from './photos/photo-list/ui/photo-list.page';
import { PhotoListResolver } from './photos/photo-list/ui/resolvers/photo-list.resolver';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'access-control'
  },
  {
    path: 'access-control',
    loadChildren: './access-control/access-control.module#AccessControlModule'
  },
  {
    path: 'user/:userName', component: PhotoListPage, resolve: {
      photos: PhotoListResolver
    }
  },
  { path: 'p/add', component: PhotoFormPage },
  { path: '**', component: NotFoundPage }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
