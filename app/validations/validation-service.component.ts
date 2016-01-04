import {Component, Host} from 'angular2/core';
import {NgFormModel} from 'angular2/common';

@Component({
    selector: 'control-messages',
    inputs: ['controlName: control'],
    template: `<div *ngIf="errorMessage !== null"><div class="alert alert-danger">{{errorMessage}}</div></div>`
})
export class ControlMessagesComponent {
    controlName: string;
    constructor( @Host() private _formDir: NgFormModel) {}

    get errorMessage() {
        // Find the control in the Host (Parent) form
        let c = this._formDir.form.find(this.controlName);
        
        for (let propertyName in c.errors) {
            // If control has a error
            if (c.errors.hasOwnProperty(propertyName) && c.touched) {
                // Return the appropriate error message from the Validation Service
                return this.getValidatorErrorMessage(propertyName);
            }
        }

        return null;
    }

    getValidatorErrorMessage(code: string) {
        let config = {
            'required': 'Required',
            'invalidEmail': 'Invalid email address',
            'invalidPwd': 'Invalid password. Password must be at least 6 characters long, and contain a number.',
            'pwdMismatch': 'Passwords does not match'
        };
        return config[code];

    }
}