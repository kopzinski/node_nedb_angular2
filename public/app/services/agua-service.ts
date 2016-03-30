import {Injectable}     from 'angular2/core';
import {Http, Response} from 'angular2/http';
import {Agua}           from '../interfaces/agua';
import {Observable}     from 'rxjs/Observable';
import {Headers, RequestOptions, RequestMethod} from 'angular2/http';

@Injectable()
export class AguaService {
    constructor (private http: Http) {}

    private _aguasUrl = 'v1/aguas';  // URL to web api

    getAgua (aguaId : string) {
        return this.http.get(this._aguasUrl + '/' + aguaId);
    }

    getAguas () {
        return this.http.get(this._aguasUrl);
    }

    addAgua (agua: Agua) : Observable<Agua>  {

        let body = JSON.stringify(agua);
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = { headers: headers};
        return this.http.post(this._aguasUrl, body, options);
    }

    saveAgua (agua: Agua) : Observable<Agua>  {
        let body = JSON.stringify(agua);
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = { headers: headers};
        return this.http.put(this._aguasUrl + '/' +agua._id, body, options);
    }

    private handleError (error: Response) {
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }
}