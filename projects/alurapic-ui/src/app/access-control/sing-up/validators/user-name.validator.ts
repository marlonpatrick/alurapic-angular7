import { AbstractControl } from '@angular/forms';

export function userNameValidator(control: AbstractControl) {

    const regexPattern = /^[a-z][a-z0-9_\-]+$/;

    if (control.value.trim() && !regexPattern.test(control.value)) {
        return { userName: true };
    }

    return null;
}
