import {Injectable}     from 'angular2/core';
import {Http, Response} from 'angular2/http';
import {Refeicao}           from './refeicao';
import {Observable}     from 'rxjs/Observable';
import {Headers, RequestOptions, RequestMethod} from 'angular2/http';

@Injectable()
export class RefeicaoService {
    constructor (private http: Http) {}

    private _heroesUrl = 'v1/refeicoes';  // URL to web api

    getRefeicoes () {
        return this.http.get(this._heroesUrl+'/fplqg1AI2Kn67hth')
            //.map(res => <Refeicao[]> res.json().data)
            //.do(data => console.log(data)) // eyeball results in the console
            //.catch(this.handleError);
    }
    private handleError (error: Response) {
        // in a real world app, we may send the error to some remote logging infrastructure
        // instead of just logging it to the console
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }

    addRefeicao (refeicao: Refeicao) : Observable<Refeicao>  {
        let body = JSON.stringify(refeicao);
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = { headers: headers};
        return this.http.post(this._heroesUrl, body, options);
    }

    saveRefeicao (refeicao: Refeicao) : Observable<Refeicao>  {
        let body = JSON.stringify(refeicao);
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = { headers: headers};
        return this.http.put(this._heroesUrl+'/'+refeicao._id, body, options);
    }

}