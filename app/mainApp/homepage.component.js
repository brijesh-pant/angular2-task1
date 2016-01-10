System.register(['angular2/core', 'angular2/router', 'angular2/http', '../users/user.service'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_1, http_1, user_service_1;
    var HomepageComponent;
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
            function (user_service_1_1) {
                user_service_1 = user_service_1_1;
            }],
        execute: function() {
            HomepageComponent = (function () {
                function HomepageComponent(_router, http, _userService) {
                    this._router = _router;
                    this.http = http;
                    this._userService = _userService;
                    this.values = [];
                }
                //========================================
                HomepageComponent.prototype.getUserName = function () {
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
                HomepageComponent.prototype.logout = function () {
                    console.log("In logout", localStorage.getItem('tokenId'));
                    localStorage.removeItem('tokenId');
                    console.log("In logout", localStorage.getItem('tokenId'));
                };
                //========================================
                HomepageComponent.prototype.addElement = function (value) {
                    this.values.push(value);
                    console.log(this.values);
                };
                HomepageComponent = __decorate([
                    core_1.Component({
                        template: "\n\t\t<h1>Homepage</h1>\n\t",
                        providers: [user_service_1.UserService],
                        directives: [router_1.ROUTER_DIRECTIVES],
                    }), 
                    __metadata('design:paramtypes', [router_1.Router, http_1.Http, user_service_1.UserService])
                ], HomepageComponent);
                return HomepageComponent;
            })();
            exports_1("HomepageComponent", HomepageComponent);
        }
    }
});
//# sourceMappingURL=homepage.component.js.map