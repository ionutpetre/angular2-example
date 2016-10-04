import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'angular2-cookie/core';
import { UserService } from "./../services/user.service";

@Component({
    selector: 'login',
    templateUrl: 'app/templates/login.template.html',
    providers: [UserService, CookieService]
})
export class LoginComponent {
    @Input() username: string;
    @Input() password: string;

    constructor(private cookieService: CookieService,
        private userService: UserService,
        private router: Router) { }

    login() {
        this.userService.authUser(this.username, this.password).subscribe(
            data => {
                var user = data.json();
                if (data.json().hasOwnProperty('id')) {
                    console.log('user logged: ', user);
                    this.cookieService.put('userId', user.id);
                    this.router.navigateByUrl('/dashboard');
                }
            }
        );
    }
}