import { Observable } from 'rxjs';
import { NewUser } from './new-user';

export abstract class SignUpProcessorGateway {

  abstract execute(newUser: NewUser): Observable<Object>;
}
