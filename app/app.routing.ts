import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { LoginComponent } from './components/login.component';
import { DashboardComponent } from './components/dashboard.component';
import { ProfileComponent } from './components/profile.component';

const appRoutes: Routes = [{
    path: '',
    component: LoginComponent
}, {
    path: 'login',
    component: LoginComponent
}, {
    path: 'dashboard',
    component: DashboardComponent
}, {
    path: 'profile/:id',
    component: ProfileComponent
}];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);