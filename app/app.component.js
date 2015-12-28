System.register(['angular2/core', 'angular2/router', './homepage.component', './about-us-page.component', './user-listing.component'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_1, homepage_component_1, about_us_page_component_1, user_listing_component_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (homepage_component_1_1) {
                homepage_component_1 = homepage_component_1_1;
            },
            function (about_us_page_component_1_1) {
                about_us_page_component_1 = about_us_page_component_1_1;
            },
            function (user_listing_component_1_1) {
                user_listing_component_1 = user_listing_component_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                }
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        templateUrl: '../views/dashboard.html',
                        directives: [router_1.ROUTER_DIRECTIVES]
                    }),
                    router_1.RouteConfig([
                        { path: '/home', name: 'Homepage', component: homepage_component_1.HomepageComponent },
                        { path: '/aboutUs', name: 'AboutUsPage', component: about_us_page_component_1.AboutUsPageComponent },
                        { path: '/userListing', name: 'UserListing', component: user_listing_component_1.UserListingComponent },
                    ]), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            })();
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map