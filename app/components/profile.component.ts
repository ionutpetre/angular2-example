import { Component, OnInit} from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';

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

    constructor(private userService: UserService, private route: ActivatedRoute, private location: Location) { }

    ngOnInit(): void {
        this.route.params.forEach((params: Params) => {
            let userId = params['id'];
            this.userService.getUserById(userId).subscribe(data => {
                this.user = data.json();
                this.isProfileLoaded = true;
            });
        });
    }
}