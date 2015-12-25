import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';

import {HomepageComponent} from './homepage.component'
import {AboutUsPageComponent} from './about-us-page.component'

@Component({
	selector: 'my-app',
	template: `
	<div class="container">
		<h1>Angular 2 Task1</h1>
		<a [routerLink]="['Homepage']">Home</a>
		<a [routerLink]="['AboutUsPage']">About Us</a>
		<router-outlet></router-outlet>
	</div>
	`,
	directives: [ROUTER_DIRECTIVES]
})
@RouteConfig([
	{path:'/home', name: 'Homepage', component: HomepageComponent},
	{path:'/aboutUs', name: 'AboutUsPage', component: AboutUsPageComponent},
])

export class AppComponent { }