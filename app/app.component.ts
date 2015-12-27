import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';

import {HomepageComponent} from './homepage.component'
import {AboutUsPageComponent} from './about-us-page.component'

@Component({
	selector: 'my-app',
	templateUrl: '../views/dashboard.html',
	directives: [ROUTER_DIRECTIVES]
})
@RouteConfig([
	{path:'/home', name: 'Homepage', component: HomepageComponent},
	{path:'/aboutUs', name: 'AboutUsPage', component: AboutUsPageComponent},
])

export class AppComponent { }