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
var router_1 = require('@angular/router');
var core_2 = require('angular2-cookie/core');
var user_service_1 = require("./../services/user.service");
var LoginComponent = (function () {
    function LoginComponent(cookieService, userService, router) {
        this.cookieService = cookieService;
        this.userService = userService;
        this.router = router;
    }
    LoginComponent.prototype.login = function () {
        var _this = this;
        this.userService.authUser(this.username, this.password).subscribe(function (data) {
            var user = data.json();
            if (data.json().hasOwnProperty('id')) {
                console.log('user logged: ', user);
                _this.cookieService.put('userId', user.id);
                _this.router.navigateByUrl('/dashboard');
            }
        });
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], LoginComponent.prototype, "username", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], LoginComponent.prototype, "password", void 0);
    LoginComponent = __decorate([
        core_1.Component({
            selector: 'login',
            templateUrl: 'app/templates/login.template.html',
            providers: [user_service_1.UserService, core_2.CookieService]
        }), 
        __metadata('design:paramtypes', [core_2.CookieService, user_service_1.UserService, router_1.Router])
    ], LoginComponent);
    return LoginComponent;
}());
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=login.component.js.map