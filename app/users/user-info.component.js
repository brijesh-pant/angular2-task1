System.register(['angular2/core', 'angular2/router', './user.service'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_1, router_2, user_service_1;
    var UserInfoComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
                router_2 = router_1_1;
            },
            function (user_service_1_1) {
                user_service_1 = user_service_1_1;
            }],
        execute: function() {
            UserInfoComponent = (function () {
                function UserInfoComponent(_router, _routeParams, _userService) {
                    this._router = _router;
                    this._routeParams = _routeParams;
                    this._userService = _userService;
                }
                UserInfoComponent.prototype.onEdit = function () {
                    this.editUser = true;
                    this.originalUser = this.user;
                };
                UserInfoComponent.prototype.onUpdateDetails = function () {
                    this.editUser = false;
                    this.goToUserInfo();
                };
                UserInfoComponent.prototype.onCancel = function () {
                    // cancel not done this.editUser referencing to the same this.user object 
                    // create a new user object from this.user to solve this
                    this.user = this.originalUser;
                    this.editUser = false;
                    this.goToUserInfo();
                };
                UserInfoComponent.prototype.goToUserInfo = function () {
                    console.log(this.user.id);
                    var route = ['UserInfo', { id: this.user.id }];
                    this._router.navigate(route);
                };
                UserInfoComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this.editUser = false;
                    var id = this._routeParams.get('id');
                    this._userService.getUser(id).then(function (user) {
                        _this.user = user;
                    });
                };
                UserInfoComponent = __decorate([
                    core_1.Component({
                        templateUrl: '/views/userInfo.html',
                        providers: [user_service_1.UserService]
                    }), 
                    __metadata('design:paramtypes', [router_1.Router, router_2.RouteParams, user_service_1.UserService])
                ], UserInfoComponent);
                return UserInfoComponent;
            })();
            exports_1("UserInfoComponent", UserInfoComponent);
        }
    }
});
//# sourceMappingURL=user-info.component.js.map