import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccessControlHomePage } from './home/ui/access-control-home.page';
import { SignInPage } from './sign-in/ui/sign-in.page';
import { SignUpPage } from './sing-up/ui/sign-up.page';
import { SignedInUserGuard } from './shared/ui/guards/signed-in-user.guard';

const routes: Routes = [
  {
    path: '',
    component: AccessControlHomePage,
    canActivate: [SignedInUserGuard],
    children: [
      {path: '', redirectTo: 'sign-in', pathMatch: 'full'},
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

