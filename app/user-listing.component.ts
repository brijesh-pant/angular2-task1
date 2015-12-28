import {Component} from 'angular2/core';
import {OnInit} from 'angular2/core';
import {User} from './user';
import {UserService} from './user.service';

@Component({
	templateUrl: '../views/userListing.html',
	providers: [UserService]
})

export class UserListingComponent implements OnInit { 
	public users: User[];

	constructor(private _userService: UserService){}

	getUsers(){
		this.users = this._userService.getUsers();
	}

	ngOnInit(){
		this.getUsers();
	}
}