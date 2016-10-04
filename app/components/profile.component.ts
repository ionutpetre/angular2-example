import { Component } from '@angular/core';

import { user } from './../types/user.type';
import { UserService } from './../services/user.service';

@Component({
    selector: 'profile',
    templateUrl: 'app/templates/profile.template.html',
    providers: [UserService]
})
export class ProfileComponent {
    user: user;
    isProfileLoaded = false;

    constructor(private userService: UserService) {
        var userId = 1;
        this.userService.getUserById(userId).subscribe(data => {
            this.user = data.json();
            this.isProfileLoaded = true;
        });
    }
}