import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CovidComponent } from './components/covid/covid.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { ProfileComponent } from './components/profile/profile.component';
import { RegisterComponent } from './components/register/register.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent },
  {path: '', component: LoginComponent},
  { path: 'register', component: RegisterComponent},
  { path: '**', redirectTo: 'login', pathMatch: 'full' },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
