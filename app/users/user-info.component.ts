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
	public originalUser: User;
	public editUser: boolean;
	constructor(private _router: Router,
		private _routeParams: RouteParams,
		private _userService: UserService){
	}

	onEdit(){
		this.editUser = true;
		this.originalUser = this.user;
	}

	onUpdateDetails(){
		this.editUser = false;
		this.goToUserInfo();
	}

	onCancel(){
		this.user = this.originalUser;
		this.editUser = false;
		this.goToUserInfo();
	}

	goToUserInfo(){
		console.log(this.user.id);
		let route = ['UserInfo', { id: this.user.id }];
		this._router.navigate(route);
	}

	ngOnInit(){
		this.editUser = false;
		let id = this._routeParams.get('id');
		this._userService.getUser(id).then(user => {
			this.user = user;
		});
		console.log(this.user);
	}
}

