System.register(['angular2/core', 'angular2/router', 'angular2/http', './homepage.component', './about-us-page.component', './users/user-listing.component', './users/user-info.component', './register-user.component', './login-user.component', './users/user.service'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_1, http_1, homepage_component_1, about_us_page_component_1, user_listing_component_1, user_info_component_1, register_user_component_1, login_user_component_1, user_service_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (homepage_component_1_1) {
                homepage_component_1 = homepage_component_1_1;
            },
            function (about_us_page_component_1_1) {
                about_us_page_component_1 = about_us_page_component_1_1;
            },
            function (user_listing_component_1_1) {
                user_listing_component_1 = user_listing_component_1_1;
            },
            function (user_info_component_1_1) {
                user_info_component_1 = user_info_component_1_1;
            },
            function (register_user_component_1_1) {
                register_user_component_1 = register_user_component_1_1;
            },
            function (login_user_component_1_1) {
                login_user_component_1 = login_user_component_1_1;
            },
            function (user_service_1_1) {
                user_service_1 = user_service_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent(http, _userService) {
                    this.http = http;
                    this._userService = _userService;
                }
                AppComponent.prototype.getUserName = function () {
                    var _this = this;
                    var creds = "token=" + localStorage.getItem('tokenId');
                    console.log("In get user name", creds);
                    //console.log("stringify",JSON.stringify(creds));
                    var headers = new http_1.Headers();
                    headers.append('Content-Type', 'application/x-www-form-urlencoded');
                    this.http.post('http://localhost:4000/decode', creds, {
                        headers: headers
                    })
                        .subscribe(function (data) {
                        console.log("Data", data._body);
                        _this._userService.getUserByEmail(data._body).then(function (user) {
                            console.log("User got by using email:", user);
                            _this.user = user;
                            _this.username = _this.user.name;
                            console.log("User name", _this.username);
                        });
                    });
                };
                AppComponent.prototype.logout = function () {
                    console.log("In logout", localStorage.getItem('tokenId'));
                    localStorage.removeItem('tokenId');
                    console.log("In logout", localStorage.getItem('tokenId'));
                };
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        templateUrl: '../views/greetingPage.html',
                        providers: [user_service_1.UserService],
                        directives: [router_1.ROUTER_DIRECTIVES]
                    }),
                    router_1.RouteConfig([
                        { path: '/login', name: 'LoginUser', component: login_user_component_1.LoginUserComponent, useAsDefault: true },
                        { path: '/home', name: 'Homepage', component: homepage_component_1.HomepageComponent },
                        { path: '/aboutUs/:id', name: 'AboutUsPage', component: about_us_page_component_1.AboutUsPageComponent },
                        { path: '/userInfo/:id', name: 'UserInfo', component: user_info_component_1.UserInfoComponent },
                        { path: '/userListing', name: 'UserListing', component: user_listing_component_1.UserListingComponent },
                        { path: '/register', name: 'RegisterUser', component: register_user_component_1.RegisterUserComponent }
                    ]), 
                    __metadata('design:paramtypes', [http_1.Http, user_service_1.UserService])
                ], AppComponent);
                return AppComponent;
            })();
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map