System.register(['angular2/core', 'angular2/router', 'angular2/http'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_1, http_1;
    var LoginUserComponent;
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
            }],
        execute: function() {
            LoginUserComponent = (function () {
                function LoginUserComponent(router, http) {
                    this.router = router;
                    this.http = http;
                    this._router = router;
                }
                LoginUserComponent.prototype.login = function (event, username, password) {
                    var _this = this;
                    // This will be called when the user clicks on the Login button
                    event.preventDefault();
                    console.log("in login", username, password);
                    if (this.loggedIn() == true) {
                        console.log("true logged in");
                        var route = ['Dashboard'];
                        this._router.navigate(route);
                    }
                    else {
                        console.log("false logged in");
                        var creds = "username=" + username + "&password=" + password;
                        var headers = new http_1.Headers();
                        headers.append('Content-Type', 'application/x-www-form-urlencoded');
                        this.http.post('http://localhost:4000', creds, {
                            headers: headers
                        })
                            .subscribe(function (data) {
                            console.log("Before save jwt", data._body);
                            _this.saveJwt(data._body);
                        }, function (err) { return _this.logError(err); }, function () {
                            var route = ['Dashboard'];
                            _this._router.navigate(route);
                            console.log('Authentication Complete');
                        });
                    }
                    /* data => console.log("Data",data._body)
            
                    this.http.get('http://localhost:4000/')
                        // Call map on the response observable to get the parsed people object
                        
                        // Subscribe to the observable to get the parsed people object and attach it to the
                        // component
                        .subscribe(res => {
                            console.log("Response", res.json()); } );*/
                };
                LoginUserComponent.prototype.loggedIn = function () {
                    console.log("In login", localStorage.getItem('tokenId'));
                    return (localStorage.getItem('tokenId') ? true : false);
                };
                LoginUserComponent.prototype.saveJwt = function (jwt) {
                    if (jwt) {
                        console.log("Save jwt", jwt);
                        localStorage.setItem('tokenId', jwt);
                    }
                };
                LoginUserComponent = __decorate([
                    core_1.Component({
                        templateUrl: '/views/loginUser.html',
                        directives: [router_1.ROUTER_DIRECTIVES],
                    }), 
                    __metadata('design:paramtypes', [router_1.Router, http_1.Http])
                ], LoginUserComponent);
                return LoginUserComponent;
            })();
            exports_1("LoginUserComponent", LoginUserComponent);
        }
    }
});
//# sourceMappingURL=login-user.component.js.map