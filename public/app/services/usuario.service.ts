import {Injectable}     from 'angular2/core';
import {Http, Response} from 'angular2/http';
import {Refeicao}           from '../interfaces/refeicao';
import {Observable}     from 'rxjs/Observable';
import {Headers, RequestOptions, RequestMethod} from 'angular2/http';
import {Usuario} from "../interfaces/usuario";

@Injectable()
export class UsuarioService {
    constructor (private http: Http) {}

    private _heroesUrl = 'v1/usuarios';
    private _loginUrl = 'v1/login';

    // getRefeicao () {
    //     return this.http.get(this._heroesUrl+'/fplqg1AI2Kn67hth')
    // }

    // getRefeicoes () {
    //     return this.http.get(this._heroesUrl)
    // }

    private handleError (error: Response) {
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }

    login (usuario: Usuario) : Observable<Usuario>  {
        let body = JSON.stringify(usuario);
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = { headers: headers};
        return this.http.post(this._loginUrl, body, options);
    }

    saveRefeicao (refeicao: Refeicao) : Observable<Refeicao>  {
        let body = JSON.stringify(refeicao);
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = { headers: headers};
        return this.http.put(this._heroesUrl+'/'+refeicao._id, body, options);
    }

}