import {Component} from 'angular2/core';
import {OnInit} from 'angular2/core';
import {Router} from 'angular2/router';
import {RouteParams} from 'angular2/router';

import {User} from './user';
import {UserService} from './user.service';

@Component({
	templateUrl: '/views/userInfo.html',
	providers: [UserService]
})

export class UserInfoComponent implements OnInit { 
	public user: User;
	public userToEdit: User;
	public cancelEdit: User;
	public editUser: boolean;
	constructor(private _router: Router,
		private _routeParams: RouteParams,
		private _userService: UserService){

	}

	onEdit(){
		this.editUser = true;
		this.user = undefined;
	}

	onUpdateDetails(){
		this.user = this.userToEdit;
		this.goToUserInfo();
	}

	onCancel(){
		//this.goToUserInfo();
	}

	goToUserInfo(){
		console.log(this.user.id);
		let route = ['UserInfo', { id: this.user.id }];
		this._router.navigate(route);
	}

	ngOnInit(){
		let id = this._routeParams.get('id');
		this._userService.getUser(id).then(user => {
			this.user = user;
			this.userToEdit = user;
		} );
	}
}

