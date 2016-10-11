import { Component } from '@angular/core';
import { Router, NavigationStart, NavigationEnd, Event } from '@angular/router';
import { CookieService } from 'angular2-cookie/core';

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

    constructor(private router: Router, private cookieService: CookieService) { }

    ngOnInit() {
        this.router.events.subscribe((event: Event) => {
            if (event instanceof NavigationEnd) {
                if (!this.cookieService.get('userId')) {
                    if (event.url != '/login') {
                        this.router.navigateByUrl('/login');
                    }
                } else {
                    if (event.url == '/login') {
                        this.router.navigateByUrl('/dashboard');
                    }
                }
            }
        });
    }
}