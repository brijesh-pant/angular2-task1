import {Pipe} from 'angular2/core';
import {User} from './users/user';
@Pipe({ name: 'sort' })
export class SortPipe {
	transform(array: User[], args: string[]): any {
		console.log("args[0]", args[0]);
		if (typeof args[0] === "undefined") {
			console.log("In pipe", array);
            return array;
        }
        else{
			console.log("Array", array);
			let order = args[0][0];
			console.log("direction", order);
			let column = args[0].slice(1);
			console.log("column", column);
			array.sort((a: any, b: any) => {

				let left = a[column];
				console.log("Left", left);
				let right = b[column];
				console.log("right", right);
				console.log("right - left", right - left);
				return (order === "-" ? (left == right ? 0 : (left > right ? -1 : 1)) : -((left == right ? 0 : (left > right ? -1 : 1))));
				//return (direction === "-") ? right - left : left - right;
			});
			return array;
        }
	}
}