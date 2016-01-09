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

	//======================================

	login(event, username, password) {
		// This will be called when the user clicks on the Login button
		event.preventDefault();
		console.log("in login", username, password);

		if (this.loggedIn() == true) {
			console.log("true logged in");
			let route = ['Homepage'];
			this._router.navigate(route);
		} else {
			console.log("false logged in");
			var creds = "username=" + username + "&password=" + password;

			var headers = new Headers();
			headers.append('Content-Type', 'application/x-www-form-urlencoded');

			this.http.post('http://localhost:4000', creds, {
				headers: headers
			})
				.subscribe(data => {
					console.log("Before save jwt", data._body);
					this.saveJwt(data._body)
				},
				err => this.logError(err),
				() => {
					let route = ['Homepage'];
					console.log("Route", route);
					this._router.navigate(route);
					console.log('Authentication Complete');
				}
				);
		}
		

		/* data => console.log("Data",data._body)

		this.http.get('http://localhost:4000/')
			// Call map on the response observable to get the parsed people object
			
			// Subscribe to the observable to get the parsed people object and attach it to the
			// component
			.subscribe(res => { 
				console.log("Response", res.json()); } );*/


	}



	loggedIn(): boolean {
		console.log("In login", localStorage.getItem('tokenId'));
		return (localStorage.getItem('tokenId') ? true : false);
	}

	saveJwt(jwt) {
		if (jwt) {
			console.log("Save jwt", jwt);
			localStorage.setItem('tokenId', jwt)
		}
	}
}