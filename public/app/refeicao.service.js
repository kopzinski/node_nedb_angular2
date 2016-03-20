var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('angular2/core');
var Observable_1 = require('rxjs/Observable');
var http_1 = require('angular2/http');
var RefeicaoService = (function () {
    function RefeicaoService(http) {
        this.http = http;
        this._heroesUrl = 'v1/refeicoes'; // URL to web api
    }
    RefeicaoService.prototype.getRefeicoes = function () {
        return this.http.get(this._heroesUrl)
            .map(function (res) { return res.json().data; })
            .do(function (data) { return console.log(data); }) // eyeball results in the console
            .catch(this.handleError);
    };
    RefeicaoService.prototype.handleError = function (error) {
        // in a real world app, we may send the error to some remote logging infrastructure
        // instead of just logging it to the console
        console.error(error);
        return Observable_1.Observable.throw(error.json().error || 'Server error');
    };
    RefeicaoService.prototype.addRefeicao = function (name) {
        var body = JSON.stringify({ name: name });
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ headers: headers });
        return this.http.post(this._heroesUrl, body, options)
            .toPromise()
            .then(function (res) { return res.json().data; })
            .catch(this.handleError);
        //let body = JSON.stringify({
        //    foto: 'uploads/fotos/eb9d16435b53b9c4910b1c8b4f266d1a.png',
        //    atleta: 'Paulo Mello',
        //    data : '10/06/2016 16:00',
        //    status : 'APROVADO'
        //});
        //
        //let body = {
        //    foto: 'uploads/fotos/eb9d16435b53b9c4910b1c8b4f266d1a.png',
        //    atleta: 'Paulo Mello',
        //    data : '10/06/2016 16:00',
        //    status : 'APROVADO'
        //};
        //
        //let headers = new Headers({ 'Content-Type': 'application/json' });
        //let options = new RequestOptions({ headers: headers , body : body, method : RequestMethod.Post, url : this._heroesUrl});
        //
        //console.log(options);
        //return this.http.post(this._heroesUrl, JSON.stringify(body), options);
    };
    RefeicaoService = __decorate([
        core_1.Injectable()
    ], RefeicaoService);
    return RefeicaoService;
})();
exports.RefeicaoService = RefeicaoService;
//# sourceMappingURL=refeicao.service.js.map