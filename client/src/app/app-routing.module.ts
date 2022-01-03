import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DashboardComponent} from "./dashboard/dashboard.component";
import {SpecialDashboardComponent} from "./special-dashboard/special-dashboard.component";
import {SignUpComponent} from "./sign-up/sign-up.component";
import {LoginComponent} from "./login/login.component";

const routes: Routes = [
  { path:'', redirectTo:'/events', pathMatch:'full'},
  { path:'dashboard', component: DashboardComponent },
  { path:'special-dashboard', component: SpecialDashboardComponent },
  { path:'sign-up', component: SignUpComponent },
  { path:'login', component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
