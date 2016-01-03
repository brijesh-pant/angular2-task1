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
    var SortPipe;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            SortPipe = (function () {
                function SortPipe() {
                }
                SortPipe.prototype.transform = function (array, args) {
                    console.log("args[0]", args[0]);
                    if (typeof args[0] === "undefined") {
                        console.log("In pipe", array);
                        return array;
                    }
                    else {
                        console.log("Array", array);
                        var order = args[0][0];
                        console.log("direction", order);
                        var column = args[0].slice(1);
                        console.log("column", column);
                        array.sort(function (a, b) {
                            var left = a[column];
                            console.log("Left", left);
                            var right = b[column];
                            console.log("right", right);
                            console.log("right - left", right - left);
                            return (order === "-" ? (left == right ? 0 : (left > right ? -1 : 1)) : -((left == right ? 0 : (left > right ? -1 : 1))));
                            //return (direction === "-") ? right - left : left - right;
                        });
                        return array;
                    }
                };
                SortPipe = __decorate([
                    core_1.Pipe({ name: 'sort' }), 
                    __metadata('design:paramtypes', [])
                ], SortPipe);
                return SortPipe;
            })();
            exports_1("SortPipe", SortPipe);
        }
    }
});
//# sourceMappingURL=sort.pipe.js.map