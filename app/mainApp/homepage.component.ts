import {Component} from 'angular2/core';
import {Router, RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {Http, Headers} from 'angular2/http';

import {UserService} from '../users/user.service'
import {User} from '../users/user';

@Component({
	template: `
		<h1>Homepage</h1>
	`,
	providers: [UserService],
	directives: [ROUTER_DIRECTIVES],
	/*template: `
	<h2>Home</h2>
	<p>Get your users here</p>
	<input #box (keyup.enter)="addElement(box.value)"
	(blur) = "addElement(box.value);box.value = ''">
	<button (click)="addElement(box.value)">Add</button>
	<ul *ngFor="#value of values">
		<li>{{value}}</li>
	</ul>`*/
})

export class HomepageComponent { 
	values = [];
	public username: string;
	public user: User;

	constructor( private _router: Router,
				private http: Http,
				private _userService: UserService) {

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
		console.log("In logout", localStorage.getItem('tokenId'));
	}

	//========================================

	addElement(value: string){
		this.values.push(value);
		console.log(this.values);
	}
}