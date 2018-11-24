import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccessControlHomePage } from './home/ui/access-control-home.page';
import { SignInPage } from './sign-in/ui/sign-in.page';
import { SignedInUserGuard } from './signed-in-user/ui/guards/signed-in-user.guard';
import { SignUpPage } from './sing-up/ui/sign-up.page';

const routes: Routes = [
  {
    path: '',
    component: AccessControlHomePage,
    canActivate: [SignedInUserGuard],
    children: [
      { path: '', redirectTo: 'sign-in', pathMatch: 'full' },
      { path: 'sign-in', component: SignInPage },
      { path: 'sign-up', component: SignUpPage }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccessControlRoutingModule { }

