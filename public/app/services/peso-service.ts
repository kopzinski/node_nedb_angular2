import {Injectable}     from 'angular2/core';
import {Http, Response} from 'angular2/http';
import {Peso}           from '../interfaces/peso';
import {Observable}     from 'rxjs/Observable';
import {Headers, RequestOptions, RequestMethod} from 'angular2/http';

@Injectable()
export class PesoService {
    constructor (private http: Http) {}

    private _pesosUrl = 'v1/pesos';  // URL to web api

    getPeso (pesoId : string) {
        return this.http.get(this._pesosUrl + '/' + pesoId);
    }

    getPesos () {
        return this.http.get(this._pesosUrl);
    }

    addPeso (peso: Peso) : Observable<Peso>  {

        let body = JSON.stringify(peso);
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = { headers: headers};
        return this.http.post(this._pesosUrl, body, options);
    }

    savePeso (peso: Peso) : Observable<Peso>  {
        let body = JSON.stringify(peso);
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = { headers: headers};
        return this.http.put(this._pesosUrl + '/' + peso._id, body, options);
    }

    private handleError (error: Response) {
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }
}