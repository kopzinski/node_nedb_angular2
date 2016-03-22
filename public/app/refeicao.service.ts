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
        //return this.http.get(this._heroesUrl)
        //    .map(res => <Refeicao[]> res.json().data)
        //    .do(data => console.log(data)) // eyeball results in the console
        //    .catch(this.handleError);
    }
    private handleError (error: Response) {
        // in a real world app, we may send the error to some remote logging infrastructure
        // instead of just logging it to the console
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }

    addRefeicao (name: string) : Observable<Refeicao>  {
        //
        //let body = JSON.stringify({ name });
        //let headers = new Headers({ 'Content-Type': 'application/json' });
        //let options = new RequestOptions({ headers: headers });
        //return this.http.post(this._heroesUrl, body, options)
        //    .toPromise()
        //    .then(res => <Refeicao> res.json().data)
        //    .catch(this.handleError);


        //let body = JSON.stringify({
        //    foto: 'uploads/fotos/eb9d16435b53b9c4910b1c8b4f266d1a.png',
        //    atleta: 'Paulo Mello',
        //    data : '10/06/2016 16:00',
        //    status : 'APROVADO'
        //});

        let body = {
            foto: 'uploads/fotos/eb9d16435b53b9c4910b1c8b4f266d1a.png',
            atleta: 'Paulo Mello',
            data : '10/06/2016 16:00',
            status : 'APROVADO'
        };

        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = { headers: headers};

        console.log(options);
        return this.http.post(this._heroesUrl, JSON.stringify(body), options);

    }
}