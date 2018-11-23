import { Observable } from 'rxjs';

export abstract class UserNameIsTakenQueryGateway {

    abstract execute(userName: string): Observable<boolean>;
}
