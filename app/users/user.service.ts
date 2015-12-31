import {Injectable} from 'angular2/core';
import {users} from './mock-users';
import {User} from './user';

@Injectable()
export class UserService {
	//public usersData: User[];
	getUsers(){
		var usersData;
		return getUserData().then(function(data) {
			usersData = data;
			usersData = JSON.parse(usersData).users;
			return Promise.resolve(usersData);
			
		}, function(error) { });

		function getUserData(){
			return new Promise(function(resolve, reject) {
				var xhttp = new XMLHttpRequest();
				xhttp.onload = function() {
					if (xhttp.readyState == 4 && xhttp.status == 200) {

						resolve(xhttp.responseText);
					}
				}
				xhttp.open("GET", "assets/usersJsonData.html", true);
				xhttp.send();
			});
		}
		//usersData: User[];
		/*var xhttp = new XMLHttpRequest();
		xhttp.onload = function() {
			if (xhttp.readyState == 4 && xhttp.status == 200) {
				this.usersData = JSON.parse(xhttp.responseText).users;
				return this.usersData;
			}
		}
		xhttp.open("GET", "assets/usersJsonData.html", true);
		xhttp.send();*/
		/*var promise = new Promise(function(resolve, reject) {
			var xhttp = new XMLHttpRequest();
			xhttp.onload = function() {
				if (xhttp.readyState == 4 && xhttp.status == 200) {

					resolve(xhttp.responseText);
				}
			}
			xhttp.open("GET", "assets/usersJsonData.html", true);
			xhttp.send();
		});
		promise.then(function(data) {
			usersData = data;
			usersData = JSON.parse(usersData).users;
			//console.log(usersData);
			//return Promise.resolve(usersData);
			
		}, function(error) { })*/
		//return JSON.parse(usersData).users;


		
		
	}

	getUser(id: number | string){
		
		return Promise.resolve(users).then(users => users.filter( user => user.id === id )[0]);
	}
}