import { Observable } from 'rxjs';
import { Photo } from '../../shared/domain/photo';

export abstract class ListPhotosFromUserQuery {

    abstract execute(userName: string, page: number): Observable<Photo[]>;
}
