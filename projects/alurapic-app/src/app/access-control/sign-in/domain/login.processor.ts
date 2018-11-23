import { Observable } from 'rxjs';

export abstract class LoginProcessor {

  abstract execute(userName: string, password: string): Observable<string>;
}
