import {Component} from 'angular2/core';
import {Router, RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {Http, Headers} from 'angular2/http';

import {DashboardComponent} from './mainApp/dashboard.component'
import {LoginUserComponent} from './login-user.component'
import {RegisterUserComponent} from './register-user.component'

@Component({
	selector: 'my-app',
	templateUrl: '../views/greetingPage.html',
	directives: [ROUTER_DIRECTIVES]
})
@RouteConfig([
		{ // Dashboard child route
			path: '/dashboard/...',
			name: 'Dashboard',
			component: DashboardComponent
		},
		{ path: '/', name: 'LoginUser', component: LoginUserComponent, useAsDefault: true },
		{ path: '/register', name: 'RegisterUser', component: RegisterUserComponent }
])

export class AppComponent { 

	constructor(private _router: Router,
		private http: Http) {
	}
}