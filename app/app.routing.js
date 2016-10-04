"use strict";
var router_1 = require('@angular/router');
var login_component_1 = require('./components/login.component');
var dashboard_component_1 = require('./components/dashboard.component');
var profile_component_1 = require('./components/profile.component');
var appRoutes = [{
        path: '',
        component: dashboard_component_1.DashboardComponent
    }, {
        path: 'login',
        component: login_component_1.LoginComponent
    }, {
        path: 'dashboard',
        component: dashboard_component_1.DashboardComponent
    }, {
        path: 'profile',
        component: profile_component_1.ProfileComponent
    }];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map