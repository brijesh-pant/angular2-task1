System.register(['angular2/core', 'angular2/router', './users/user.service'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_1, user_service_1;
    var AboutUsPageComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (user_service_1_1) {
                user_service_1 = user_service_1_1;
            }],
        execute: function() {
            AboutUsPageComponent = (function () {
                function AboutUsPageComponent(_router, _routeParams, _userService) {
                    this._router = _router;
                    this._routeParams = _routeParams;
                    this._userService = _userService;
                }
                AboutUsPageComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    var id = this._routeParams.get('id');
                    this._userService.getUser(id).then(function (user) {
                        _this.user = user;
                        _this.userName = _this.user.name;
                        _this.showPieChart(_this.user.salesDone);
                        _this.showBarGraph(_this.user.salesDone);
                    });
                };
                AboutUsPageComponent.prototype.showBarGraph = function (salesDone) {
                    nv.addGraph(function () {
                        var exampleData = [{
                                key: "Sales Done",
                                values: salesDone
                            }];
                        var chart = nv.models.discreteBarChart()
                            .x(function (d) { return d.label; })
                            .y(function (d) { return d.value; })
                            .staggerLabels(true)
                            .showValues(true)
                            .duration(250);
                        d3.select('#barGraph svg')
                            .datum(exampleData)
                            .call(chart);
                        nv.utils.windowResize(chart.update);
                        return chart;
                    });
                };
                AboutUsPageComponent.prototype.showPieChart = function (salesDone) {
                    nv.addGraph(function () {
                        var chart = nv.models.pieChart()
                            .x(function (d) { return d.label; })
                            .y(function (d) { return d.value; })
                            .showLabels(true);
                        d3.select("#pieChart svg")
                            .datum(salesDone)
                            .transition().duration(350)
                            .call(chart);
                        return chart;
                    });
                };
                AboutUsPageComponent = __decorate([
                    core_1.Component({
                        templateUrl: '/views/aboutUs.html',
                        providers: [user_service_1.UserService]
                    }), 
                    __metadata('design:paramtypes', [router_1.Router, router_1.RouteParams, user_service_1.UserService])
                ], AboutUsPageComponent);
                return AboutUsPageComponent;
            })();
            exports_1("AboutUsPageComponent", AboutUsPageComponent);
        }
    }
});
//# sourceMappingURL=about-us-page.component.js.map