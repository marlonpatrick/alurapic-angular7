import { Observable } from 'rxjs';

export abstract class UserNameIsTakenQuery {

    abstract execute(userName: string): Observable<boolean>;
}
