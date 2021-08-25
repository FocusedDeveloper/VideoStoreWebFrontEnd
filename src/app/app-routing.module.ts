import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StoreadminComponent } from './storeadmin/storeadmin.component';
import { LoginComponent } from './login/login.component';
import { GuestComponent } from './guest/guest.component';
import { ErrorComponent } from './error/error.component';
import { MemberComponent } from './member/member.component';
import { LogoutComponent } from './logout/logout.component';
import { AuthGaurdService } from './auth-gaurd.service';
import { SignupComponent } from './signup/signup.component';



const routes: Routes = [
  { path: 'admin', component: StoreadminComponent, canActivate:[AuthGaurdService]},
  { path: 'login', component: LoginComponent},
  { path: 'logout', component: LogoutComponent, canActivate:[AuthGaurdService]},
  { path: 'signup', component: SignupComponent},
  { path: 'guest', component: GuestComponent},
  { path: 'member', component: MemberComponent, canActivate:[AuthGaurdService]},
  { path: '', component: GuestComponent},
  { path: '**', component: ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
