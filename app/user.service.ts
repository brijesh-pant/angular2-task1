import {Injectable} from 'angular2/core';
import {users} from './mock-users';

@Injectable()
export class UserService {
	getUsers(){
		return users;
	}
}