System.register(['angular2/core', './user.service'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, user_service_1;
    var UserListingComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (user_service_1_1) {
                user_service_1 = user_service_1_1;
            }],
        execute: function() {
            UserListingComponent = (function () {
                function UserListingComponent(_userService) {
                    this._userService = _userService;
                }
                UserListingComponent.prototype.getUsers = function () {
                    this.users = this._userService.getUsers();
                };
                UserListingComponent.prototype.ngOnInit = function () {
                    this.getUsers();
                };
                UserListingComponent = __decorate([
                    core_1.Component({
                        templateUrl: '../views/userListing.html',
                        providers: [user_service_1.UserService]
                    }), 
                    __metadata('design:paramtypes', [user_service_1.UserService])
                ], UserListingComponent);
                return UserListingComponent;
            })();
            exports_1("UserListingComponent", UserListingComponent);
        }
    }
});
//# sourceMappingURL=user-listing.component.js.map