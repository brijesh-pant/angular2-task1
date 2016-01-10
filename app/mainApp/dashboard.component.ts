import {Component} from 'angular2/core';
import {ComponentInstruction, OnActivate, CanActivate, Router, RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {Http, Headers} from 'angular2/http';

import {HomepageComponent} from './homepage.component'
import {UserListingComponent} from '../users/user-listing.component'
import {AboutUsPageComponent} from '../about-us-page.component'
import {UserInfoComponent} from '../users/user-info.component'

import {UserService} from '../users/user.service'
import {User} from '../users/user';

@Component({
	templateUrl: '/views/dashboard.html',
	providers: [UserService],
	directives: [ROUTER_DIRECTIVES],
})

/*@CanActivate((next, prev) => {
		return (localStorage.getItem('tokenId') ? true : false);	
})*/


@RouteConfig([
	{ path: '/', name: 'Homepage', component: HomepageComponent, useAsDefault: true },
	{ path: '/userListing', name: 'UserListing', component: UserListingComponent },
	{ path: '/aboutUs/:id', name: 'AboutUsPage', component: AboutUsPageComponent },
	{ path: '/userInfo/:id', name: 'UserInfo', component: UserInfoComponent }
	/*{ path: '/userListing', name: 'UserListing', component: UserListingComponent },
	{ path: '/register', name: 'RegisterUser', component: RegisterUserComponent }*/
])


export class DashboardComponent {
	values = [];
	public username: string;
	public user: User;

	constructor(private _router: Router,
		private http: Http,
		private _userService: UserService) {
		this.getUserName();
	}

	//========================================
	public getUserName() {
		var creds = "token=" + localStorage.getItem('tokenId');
		console.log("In get user name", creds);
		//console.log("stringify",JSON.stringify(creds));

		var headers = new Headers();
		headers.append('Content-Type', 'application/x-www-form-urlencoded');

		this.http.post('http://localhost:4000/decode', creds, {
			headers: headers
		})
			.subscribe(data => {
				console.log("Data", data._body);
				this._userService.getUserByEmail(data._body).then(user => {
					console.log("User got by using email:", user);
					this.user = user;
					this.username = this.user.name;
					console.log("User name", this.username);
				});
			});
	}

	logout() {
		console.log("In logout", localStorage.getItem('tokenId'));
		localStorage.removeItem('tokenId');
		this._router.navigate(['LoginUser']);
		console.log("In logout", localStorage.getItem('tokenId'));
	}

	loggedIn(): boolean {
		console.log("In login", localStorage.getItem('tokenId'));
		return (localStorage.getItem('tokenId') ? true : false);
	}

	routerOnActivate(next: ComponentInstruction, prev: ComponentInstruction): any {
		if (localStorage.getItem('tokenId')) {
			return true;
		}
		else {
			this._router.navigate(['LoginUser']);
		}
	}

	//========================================

	addElement(value: string) {
		this.values.push(value);
		console.log(this.values);
	}
}