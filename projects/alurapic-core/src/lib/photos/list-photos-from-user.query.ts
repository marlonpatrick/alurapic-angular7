import { Observable } from 'rxjs';
import { Photo } from './photo';

export abstract class ListPhotosFromUserQuery {

    abstract execute(userName: string, page: number): Observable<Photo[]>;
}
