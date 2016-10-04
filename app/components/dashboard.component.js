"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var core_2 = require('angular2-cookie/core');
var user_service_1 = require('./../services/user.service');
var activity_service_1 = require('./../services/activity.service');
var DashboardComponent = (function () {
    function DashboardComponent(userService, activityService, cookieService) {
        var _this = this;
        this.userService = userService;
        this.activityService = activityService;
        this.cookieService = cookieService;
        this.isDashboardLoaded = false;
        var userId = cookieService.get('userId');
        this.userService.getUserById(userId).subscribe(function (data) {
            _this.user = data.json();
            _this.activityService.getActivities().subscribe(function (data) {
                _this.activities = data.json();
                _this.isDashboardLoaded = true;
            });
        });
    }
    DashboardComponent = __decorate([
        core_1.Component({
            selector: 'dashboard',
            templateUrl: 'app/templates/dashboard.template.html',
            providers: [user_service_1.UserService, activity_service_1.ActivityService]
        }), 
        __metadata('design:paramtypes', [user_service_1.UserService, activity_service_1.ActivityService, core_2.CookieService])
    ], DashboardComponent);
    return DashboardComponent;
}());
exports.DashboardComponent = DashboardComponent;
//# sourceMappingURL=dashboard.component.js.map