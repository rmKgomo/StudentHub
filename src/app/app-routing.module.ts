import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AcademicReportsComponent } from './components/academic-reports/academic-reports.component';
import { CovidComponent } from './components/covid/covid.component';
import { HomeComponent } from './components/home/home.component';
import { InboxComponent } from './components/inbox/inbox.component';
import { LoginComponent } from './components/login/login.component';
import { ProfileComponent } from './components/profile/profile.component';
import { RegisterComponent } from './components/register/register.component';
import { SettingsComponent } from './components/settings/settings.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent, children: [
    {path: '', component: CovidComponent, pathMatch: 'full'},
    {path: 'profile', component: ProfileComponent, pathMatch: 'full'},
    {path: 'inbox', component: InboxComponent, pathMatch: 'full'},
    {path: 'academic', component: AcademicReportsComponent, pathMatch: 'full'},
    {path: 'settings', component: SettingsComponent, pathMatch: 'full'},
    { path: '**', redirectTo: '', pathMatch: 'full' },
  ] },
  {path: '', component: LoginComponent},
  { path: 'register', component: RegisterComponent},
  { path: '**', redirectTo: 'login', pathMatch: 'full' },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
