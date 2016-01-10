import {Component} from 'angular2/core';
import {Router, ROUTER_DIRECTIVES, CanDeactivate, ComponentInstruction} from 'angular2/router';
import {Http, Headers} from 'angular2/http';

import {UserService} from './users/user.service'

@Component({
	templateUrl: '/views/loginUser.html',
	providers: [UserService],
	directives: [ROUTER_DIRECTIVES],
})

export class LoginUserComponent {
	private loginError: boolean;
	private _router: Router;
	constructor(private router: Router,
		private http: Http,
		private _userService: UserService) {
		this._router = router;
		this.loginError = true;
	}

	login(event, username, password) {
		// This will be called when the user clicks on the Login button
		event.preventDefault();
		console.log("in login",username,password);

		if(this.loggedIn() == true){
			console.log("true logged in");
			let route = ['Dashboard'];
			this._router.navigate(route);
		} else{
			console.log("false logged in");
			this._userService.checkLoginCredentials(username, password).then(user => {
				console.log("User got by using email:", user);
				if(user == undefined){
					this.loginError = false;
				}
				else {
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
							let route = ['Dashboard'];
							this._router.navigate(route);
							console.log('Authentication Complete');
						}
						);	
				}
			});
		}
		

		/* data => console.log("Data",data._body)

		this.http.get('http://localhost:4000/')
			// Call map on the response observable to get the parsed people object
			
			// Subscribe to the observable to get the parsed people object and attach it to the
			// component
			.subscribe(res => { 
				console.log("Response", res.json()); } );*/

		
	}

	loggedIn(): boolean{
		console.log("In login", localStorage.getItem('tokenId'));
		return (localStorage.getItem('tokenId') ? true : false);
	}

	saveJwt(jwt) {
		if (jwt) {
			console.log("Save jwt",jwt);
			localStorage.setItem('tokenId', jwt)
		}
	}

	routerOnActivate(next: ComponentInstruction, prev: ComponentInstruction): any {
		if (localStorage.getItem('tokenId')) {
			this._router.navigate(['Dashboard']);
		}
		else {
			return true;
		}
	}
}