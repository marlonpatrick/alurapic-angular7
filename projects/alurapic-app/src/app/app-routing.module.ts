import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignInGuard } from './access-control/sign-in/ui/guards/sign-in.guard';
import { SignInPage } from './access-control/sign-in/ui/sign-in.page';
import { NotFoundPage } from './errors/not-found/ui/not-found.page';
import { PhotoFormPage } from './photos/photo-form/ui/photo-form.page';
import { PhotoListPage } from './photos/photo-list/ui/photo-list.page';
import { PhotoListResolver } from './photos/photo-list/ui/resolvers/photo-list.resolver';
import { SignUpPage } from './access-control/sing-up/ui/sign-up.page';

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
