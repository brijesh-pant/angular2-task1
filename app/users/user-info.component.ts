import {Component} from 'angular2/core';
import {OnInit} from 'angular2/core';
import {Router} from 'angular2/router';
import {RouteParams} from 'angular2/router';
import {FORM_DIRECTIVES, FormBuilder, Control, ControlGroup, Validators} from 'angular2/common';

import {ControlMessagesComponent} from '../validations/validation-service.component'
import {User} from './user';
import {UserService} from './user.service';

@Component({
	templateUrl: '/views/userInfo.html',
	providers: [UserService],
	directives: [FORM_DIRECTIVES, ControlMessagesComponent]
})

export class UserInfoComponent implements OnInit { 
	updateUserForm: ControlGroup;
	public user: User;
	public originalUser: User;
	public editUser: boolean;
	constructor(private _router: Router,
		private _routeParams: RouteParams,
		private _userService: UserService,
		private fb: FormBuilder) {
			
		}
	
	onEdit(){
		this.editUser = true;
		this.originalUser = this.user;
	}

	onUpdateDetails(user: User){
		//console.log("user",user);
		this.user.name = user.name;
		this.user.email = user.email;
		this.user.description = user.description;
		this.editUser = false;
		this.goToUserInfo();
	}

	onCancel(){
		// cancel not done this.editUser referencing to the same this.user object 
		// create a new user object from this.user to solve this
		this.editUser = false;
		this.goToUserInfo();
	}

	goToUserInfo(){
		console.log("user id",this.user.id);
		let route = ['UserInfo', { id: this.user.id }];
		console.log("route", route);
		this._router.navigate(route);
	}

	ngOnInit(){
		this.editUser = false;
		let id = this._routeParams.get('id');
		this._userService.getUser(id).then(user => {
			this.user = user;
			this.updateUserForm = this.fb.group({
				'name': [this.user.name, Validators.required],
				'email': [this.user.email, Validators.compose([
					Validators.required, emailValidator])],
				'description': [this.user.description, Validators.required]
			});
		});
		
	}
}

function emailValidator(control: Control): { [s: string]: boolean } {
	if (!control.value.match(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/)) {
		return { invalidEmail: true };
	}
}

