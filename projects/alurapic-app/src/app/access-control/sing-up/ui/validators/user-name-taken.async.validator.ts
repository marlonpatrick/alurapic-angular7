import { Injectable } from '@angular/core';
import { AbstractControl } from '@angular/forms';
import { debounceTime, map, switchMap, first } from 'rxjs/operators';
import { UserNameIsTakenQuery } from '../../domain/user-name-is-taken.query';

@Injectable()
export class UserNameTakenAsyncValidator {

    constructor(private userNameIsTakenQuery: UserNameIsTakenQuery) { }

    checkUserNameTaken() {

        return (control: AbstractControl) => {
            return control.valueChanges
                .pipe(debounceTime(300))
                .pipe(switchMap(userName =>
                    this.userNameIsTakenQuery.execute(userName)
                ))
                .pipe(map(isTaken => isTaken ? { userNameTaken: true } : null))
                .pipe(first());
        };
    }
}
