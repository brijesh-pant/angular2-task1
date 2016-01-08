import {Component} from 'angular2/core';
import {Router} from 'angular2/router';
import {Http, Headers} from 'angular2/http';
import {CanDeactivate, ComponentInstruction} from 'angular2/router';

@Component({
	templateUrl: '/views/loginUser.html'
})

export class LoginUserComponent {//implements CanDeactivate {
	private _router: Router;
	constructor(private router: Router,
		private http: Http) {
		this._router = router;
	}

	login(event, username, password) {
		// This will be called when the user clicks on the Login button
		event.preventDefault();
		console.log("in login",username,password);

		if(this.loggedIn() == true){
			console.log("true logged in");
			let route = ['Homepage'];
			this._router.navigate(route);
		} else{
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

	/*routerCanDeactivate(next: ComponentInstruction, prev: ComponentInstruction): any {
		if (localStorage.getItem('jwt')) {
			alert("deactivated");
			let route = ['Homepage'];
			this._router.navigate(route);
			return true;
		}
		else {
			
		}
	}*/
}