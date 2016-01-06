import {Component} from 'angular2/core';
import {OnInit} from 'angular2/core';
import {Router} from 'angular2/router';
import {RouteParams} from 'angular2/router';

import {User} from './users/user';
import {UserService} from './users/user.service';

@Component({
	templateUrl: '/views/aboutUs.html',
	providers: [UserService]
})

export class AboutUsPageComponent { 
	public user: User;
	public userName: string;
	constructor(private _router: Router, 
		private _routeParams: RouteParams,
		private _userService: UserService) {
	}

	ngOnInit() {
		let id = this._routeParams.get('id');
		this._userService.getUser(id).then(user => {
			this.user = user;
			this.userName = this.user.name;
			this.showPieChart(this.user.salesDone);
			this.showBarGraph(this.user.salesDone);
		});
	}

	showBarGraph(salesDone: any) {
		nv.addGraph(function() {
			var exampleData = [{
				key: "Sales Done",
				values: salesDone
			}];

			var chart = nv.models.discreteBarChart()
				.x(function(d) { return d.label })
				.y(function(d) { return d.value })
				.staggerLabels(true)
				//.staggerLabels(historicalBarChart[0].values.length > 8)
				.showValues(true)
				.duration(250)
				;

			d3.select('#barGraph svg')
				.datum(exampleData)
				.call(chart);
			nv.utils.windowResize(chart.update);
			return chart;
		});
	}

	showPieChart(salesDone: any) {
		nv.addGraph(function() {
			var chart = nv.models.pieChart()
				.x(function(d) { return d.label })
				.y(function(d) { return d.value })
				.showLabels(true);
			d3.select("#pieChart svg")
				.datum(salesDone)
				.transition().duration(350)
				.call(chart);
			return chart;
		});
	}

	
}




