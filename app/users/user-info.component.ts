import {Component} from 'angular2/core';
import {OnInit} from 'angular2/core';
import {RouteParams} from 'angular2/router';

import {User} from './user';
import {UserService} from './user.service';

@Component({
	templateUrl: '/views/userInfo.html',
	providers: [UserService]
})

export class UserInfoComponent implements OnInit { 
	public user: User;
	public editUser: boolean;
	constructor(private _routeParams: RouteParams,
		private _userService: UserService){

	}

	onEdit(){
		this.editUser = true;
	}

	ngOnInit(){
		let id = this._routeParams.get('id');
		this._userService.getUser(id).then(user => this.user = user);
	}
}