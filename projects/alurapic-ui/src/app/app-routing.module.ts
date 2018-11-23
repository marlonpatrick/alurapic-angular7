import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignInGuard } from './access-control/sign-in/sign-in.guard';
import { SignInPage } from './access-control/sign-in/sign-in.page';
import { NotFoundPage } from './errors/not-found/not-found.page';
import { PhotoFormPage } from './photos/photo-form/photo-form.page';
import { PhotoListPage } from './photos/photo-list/photo-list.page';
import { PhotoListResolver } from './photos/photo-list/photo-list.resolver';
import { SignUpPage } from './access-control/sing-up/sign-up.page';

const routes: Routes = [
  { path: '', component: SignInPage, canActivate: [SignInGuard] },
  { path: 'sign-up', component: SignUpPage },
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
