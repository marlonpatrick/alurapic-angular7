import { Observable } from 'rxjs';

export abstract class SignInProcessorGateway {

  abstract execute(userName: string, password: string): Observable<string>;
}
