System.register(['angular2/core', 'angular2/common', './validations/validation-service.component'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, common_1, validation_service_component_1;
    var RegisterUserComponent;
    //Custom validations for the register User form
    function emailValidator(control) {
        if (!control.value.match(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/)) {
            return { invalidEmail: true };
        }
    }
    function pwdValidator(control) {
        if (!control.value.match(/^(?=.*[0-9])[a-zA-Z0-9!@#$%^&*]{6,100}$/)) {
            return { invalidPwd: true };
        }
    }
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (validation_service_component_1_1) {
                validation_service_component_1 = validation_service_component_1_1;
            }],
        execute: function() {
            RegisterUserComponent = (function () {
                function RegisterUserComponent(fb) {
                    this.registerUserForm = fb.group({
                        'name': ['', common_1.Validators.required],
                        'email': ['', common_1.Validators.compose([
                                common_1.Validators.required, emailValidator])],
                        'pwd': ['', common_1.Validators.compose([
                                common_1.Validators.required, pwdValidator])],
                        'confirmPwd': ['', common_1.Validators.compose([
                                common_1.Validators.required, pwdValidator])]
                    });
                }
                RegisterUserComponent.prototype.onSubmit = function (value) {
                    console.log("You submitted value", value);
                };
                RegisterUserComponent = __decorate([
                    core_1.Component({
                        templateUrl: '../views/registerUser.html',
                        directives: [common_1.FORM_DIRECTIVES, validation_service_component_1.ControlMessagesComponent]
                    }), 
                    __metadata('design:paramtypes', [common_1.FormBuilder])
                ], RegisterUserComponent);
                return RegisterUserComponent;
            })();
            exports_1("RegisterUserComponent", RegisterUserComponent);
        }
    }
});
/*function confirmPwdValidator(group: ControlGroup): { [s: string]: boolean } {
    let val;
    let valid = true;

    for (name in group.controls) {
        if (val === undefined) {
            val = group.controls[name].value
        } else {
            if (val !== group.controls[name].value) {
                valid = false;
                break;
            }
        }
    }

    if (valid) {
        console.log(valid);
        return { pwdMismatch: true };
    }
}*/
//# sourceMappingURL=register-user.component.js.map