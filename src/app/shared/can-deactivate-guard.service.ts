import { Injectable } from '@angular/core';
import { CanDeactivate } from '@angular/router';
import { CustomerEditComponent } from '../customer/customer-edit.component'
@Injectable()
export class CanDeactivateGuard implements CanDeactivate<CustomerEditComponent> {

    constructor() { }
    canDeactivate(target: CustomerEditComponent) {
        if (target.hasChanges()) {
            return window.confirm('Unsaved Changes! Would you like to contiue?');
        }
        return true;
    }
}
