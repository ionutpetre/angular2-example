import {Component} from '@angular/core';

@Component({
    selector: 'my-app',
    template: `
        <h1>{{title}}</h1>
        <nav>
            <a routerLink="/dashboard" routerLinkActive="active">Dashboard</a>
            <a routerLink="/login" routerLinkActive="active">Login</a>
        </nav>
        <router-outlet></router-outlet>
  `
})
export class AppComponent {
    title: string = "Angular2 Demo App";
}