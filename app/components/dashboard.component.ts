import { Component } from '@angular/core';
import { CookieService } from 'angular2-cookie/core';

import { user } from './../types/user.type';
import { activity } from './../types/activity.type';
import { UserService } from './../services/user.service';
import { ActivityService } from './../services/activity.service';

@Component({
    selector: 'dashboard',
    templateUrl: 'app/templates/dashboard.template.html',
    providers: [UserService, ActivityService]
})
export class DashboardComponent {
    user: user;
    activities: activity[];
    isDashboardLoaded = false;

    constructor(private userService: UserService,
        private activityService: ActivityService,
        private cookieService: CookieService) {
        var userId = cookieService.get('userId');
        this.userService.getUserById(userId).subscribe(data => {
            this.user = data.json();
            this.activityService.getActivities().subscribe(data => {
                this.activities = data.json();
                this.isDashboardLoaded = true;
            });
        });
    }
}