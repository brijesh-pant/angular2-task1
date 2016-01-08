import {Component} from 'angular2/core';
import {Router} from 'angular2/router';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';

@Component({
	templateUrl: '/views/dashboard.html',
	directives: [ROUTER_DIRECTIVES]
	/*template: `
	<h2>Home</h2>
	<p>Get your users here</p>
	<input #box (keyup.enter)="addElement(box.value)"
	(blur) = "addElement(box.value);box.value = ''">
	<button (click)="addElement(box.value)">Add</button>
	<ul *ngFor="#value of values">
		<li>{{value}}</li>
	</ul>`*/
})



export class HomepageComponent { 
	values = [];

	constructor( private _router: Router){

	}
	addElement(value: string){
		this.values.push(value);
		console.log(this.values);
	}
}