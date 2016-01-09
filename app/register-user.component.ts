import {Component} from 'angular2/core';
import {FORM_DIRECTIVES,FormBuilder,Control,ControlGroup,Validators} from 'angular2/common';
import {ControlMessagesComponent} from './validations/validation-service.component'
import {ROUTER_DIRECTIVES} from 'angular2/router';

@Component({
	templateUrl: '../views/registerUser.html',
	directives: [FORM_DIRECTIVES, ControlMessagesComponent, ROUTER_DIRECTIVES]
})

export class RegisterUserComponent { 
	registerUserForm: ControlGroup;
	pwdValue: string;

	constructor(fb: FormBuilder) {
		this.registerUserForm = fb.group({
			'name': ['', Validators.required],
			'email': ['', Validators.compose([
				Validators.required, emailValidator])],
			'pwd': ['', Validators.compose([
				Validators.required, pwdValidator])],
			'confirmPwd': ['', Validators.compose([
				Validators.required, pwdValidator])]
		});
	}

	onSubmit(value: string){
		console.log("You submitted value", value);
	}


	/*confirmPwdValidator(group: ControlGroup): { [s: string]: boolean } {
		//this.pwdValue = this.registerUserForm.controls.pwd.value;
		//return { pwdMismatch: true };
	}*/
}


//Custom validations for the register User form
function emailValidator(control: Control): { [s: string]: boolean } {
	if (!control.value.match(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/)) {
		return { invalidEmail: true };
	}
}

function pwdValidator(control: Control): { [s: string]: boolean } {
	if (!control.value.match(/^(?=.*[0-9])[a-zA-Z0-9!@#$%^&*]{6,100}$/)) {
		return { invalidPwd: true };
	}
}

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

