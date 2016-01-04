System.register(['angular2/core', 'angular2/common'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var __param = (this && this.__param) || function (paramIndex, decorator) {
        return function (target, key) { decorator(target, key, paramIndex); }
    };
    var core_1, common_1;
    var ControlMessagesComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            }],
        execute: function() {
            ControlMessagesComponent = (function () {
                function ControlMessagesComponent(_formDir) {
                    this._formDir = _formDir;
                }
                Object.defineProperty(ControlMessagesComponent.prototype, "errorMessage", {
                    get: function () {
                        // Find the control in the Host (Parent) form
                        var c = this._formDir.form.find(this.controlName);
                        for (var propertyName in c.errors) {
                            // If control has a error
                            if (c.errors.hasOwnProperty(propertyName) && c.touched) {
                                // Return the appropriate error message from the Validation Service
                                return this.getValidatorErrorMessage(propertyName);
                            }
                        }
                        return null;
                    },
                    enumerable: true,
                    configurable: true
                });
                ControlMessagesComponent.prototype.getValidatorErrorMessage = function (code) {
                    var config = {
                        'required': 'Required',
                        'invalidEmail': 'Invalid email address',
                        'invalidPwd': 'Invalid password. Password must be at least 6 characters long, and contain a number.',
                        'pwdMismatch': 'Passwords does not match'
                    };
                    return config[code];
                };
                ControlMessagesComponent = __decorate([
                    core_1.Component({
                        selector: 'control-messages',
                        inputs: ['controlName: control'],
                        template: "<div *ngIf=\"errorMessage !== null\"><div class=\"alert alert-danger\">{{errorMessage}}</div></div>"
                    }),
                    __param(0, core_1.Host()), 
                    __metadata('design:paramtypes', [common_1.NgFormModel])
                ], ControlMessagesComponent);
                return ControlMessagesComponent;
            })();
            exports_1("ControlMessagesComponent", ControlMessagesComponent);
        }
    }
});
//# sourceMappingURL=validation-service.component.js.map