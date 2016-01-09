import {Component, OnInit} from 'angular2/core';
import {Router} from 'angular2/router';

import {User} from './user';
import {UserService} from './user.service';

import {SortPipe} from '../sort.pipe';

@Component({
	templateUrl: '../views/userListing.html',
	pipes: [SortPipe],
	providers: [UserService]
})

export class UserListingComponent implements OnInit { 
	public order: string;
	public sortOrder: SortOrder[];
	public users: User[];

	constructor(private _router: Router, 
		private _userService: UserService) { 
		this.sortOrder = [
			{ orderOption: "select", orderValue: "undefined" },
			{ orderOption : "A-Z", orderValue : "+"},
			{ orderOption: "Z-A", orderValue: "-" }
		];
	}

	getUsers(){
		this._userService.getUsers().then( users => {
			this.users = users;
		} );
	}

	ngOnInit(){
		this.getUsers();
	}

	onUserSelect(user: User){
		this._router.navigate(['UserInfo', { id: user.id }]);
	}

	onCheckSales(user: User){
		console.log("check sales",user.id);
		this._router.navigate(['../AboutUsPage', { id: user.id }]);
	}

	onSort(event: any,attribute: string){
		if(event.target.value == "undefined"){
			this.order = undefined;
		}
		else{

			this.order = event.target.value + attribute;
		}
	}
}

interface SortOrder{
	orderOption: string;
	orderValue: string;
}