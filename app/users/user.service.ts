import {Injectable} from 'angular2/core';
import {users} from './mock-users';

@Injectable()
export class UserService {
	getUsers(){
		return users;
	}

	getUser(id: number | string){
		return Promise.resolve(users).then(users => users.filter( user => user.id === id )[0]);
	}
}