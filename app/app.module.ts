import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { CookieService } from 'angular2-cookie/services/cookies.service';

import { routing } from './app.routing';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login.component';
import { DashboardComponent } from './components/dashboard.component';
import { ProfileComponent } from './components/profile.component';
import { LoadingImgComponent } from './components/loading-img.component';

@NgModule({
    imports: [BrowserModule, FormsModule, HttpModule, routing],
    declarations: [AppComponent, LoginComponent, DashboardComponent, ProfileComponent,
        LoadingImgComponent],
    bootstrap: [AppComponent],
    providers: [CookieService]
})
export class AppModule { }
