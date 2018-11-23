import { Observable } from 'rxjs';
import { Photo } from '../../shared/domain/photo';

export abstract class ListPhotosFromUserQueryGateway {

    abstract execute(userName: string, page: number): Observable<Photo[]>;
}
