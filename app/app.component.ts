import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';

import {HomepageComponent} from './homepage.component'
import {AboutUsPageComponent} from './about-us-page.component'
import {UserListingComponent} from './users/user-listing.component'
import {UserInfoComponent} from './users/user-info.component'

@Component({
	selector: 'my-app',
	templateUrl: '../views/dashboard.html',
	directives: [ROUTER_DIRECTIVES]
})
@RouteConfig([
	{path:'/home', name: 'Homepage', component: HomepageComponent, useAsDefault: true},
	{path:'/aboutUs', name: 'AboutUsPage', component: AboutUsPageComponent},
	{path:'/userInfo/:id', name: 'UserInfo', component: UserInfoComponent},
	{path:'/userListing', name: 'UserListing', component: UserListingComponent},
])

export class AppComponent { }