System.register(['angular2/core'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1;
    var UserService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            UserService = (function () {
                function UserService() {
                }
                //public usersData: User[];
                UserService.prototype.getUsers = function () {
                    var usersData;
                    return getUserData().then(function (data) {
                        usersData = data;
                        usersData = JSON.parse(usersData).users;
                        return Promise.resolve(usersData);
                    }, function (error) { });
                    function getUserData() {
                        return new Promise(function (resolve, reject) {
                            var xhttp = new XMLHttpRequest();
                            xhttp.onload = function () {
                                if (xhttp.readyState == 4 && xhttp.status == 200) {
                                    resolve(xhttp.responseText);
                                }
                            };
                            xhttp.open("GET", "assets/usersJsonData.html", true);
                            xhttp.send();
                        });
                    }
                    //usersData: User[];
                    /*var xhttp = new XMLHttpRequest();
                    xhttp.onload = function() {
                        if (xhttp.readyState == 4 && xhttp.status == 200) {
                            this.usersData = JSON.parse(xhttp.responseText).users;
                            return this.usersData;
                        }
                    }
                    xhttp.open("GET", "assets/usersJsonData.html", true);
                    xhttp.send();*/
                    /*var promise = new Promise(function(resolve, reject) {
                        var xhttp = new XMLHttpRequest();
                        xhttp.onload = function() {
                            if (xhttp.readyState == 4 && xhttp.status == 200) {
            
                                resolve(xhttp.responseText);
                            }
                        }
                        xhttp.open("GET", "assets/usersJsonData.html", true);
                        xhttp.send();
                    });
                    promise.then(function(data) {
                        usersData = data;
                        usersData = JSON.parse(usersData).users;
                        //console.log(usersData);
                        //return Promise.resolve(usersData);
                        
                    }, function(error) { })*/
                    //return JSON.parse(usersData).users;
                };
                UserService.prototype.getUser = function (id) {
                    return this.getUsers().then(function (users) { return users.filter(function (user) { return user.id === id; })[0]; });
                };
                UserService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [])
                ], UserService);
                return UserService;
            })();
            exports_1("UserService", UserService);
        }
    }
});
//# sourceMappingURL=user.service.js.map