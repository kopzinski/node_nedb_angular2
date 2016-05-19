"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('angular2/core');
var Observable_1 = require('rxjs/Observable');
var http_1 = require('angular2/http');
var UsuarioService = (function () {
    function UsuarioService(http) {
        this.http = http;
        this._heroesUrl = 'v1/usuarios';
        this._loginUrl = 'v1/login';
    }
    // getRefeicao () {
    //     return this.http.get(this._heroesUrl+'/fplqg1AI2Kn67hth')
    // }
    // getRefeicoes () {
    //     return this.http.get(this._heroesUrl)
    // }
    UsuarioService.prototype.handleError = function (error) {
        console.error(error);
        return Observable_1.Observable.throw(error.json().error || 'Server error');
    };
    UsuarioService.prototype.login = function (usuario) {
        var body = JSON.stringify(usuario);
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = { headers: headers };
        return this.http.post(this._loginUrl, body, options);
    };
    UsuarioService.prototype.saveRefeicao = function (refeicao) {
        var body = JSON.stringify(refeicao);
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = { headers: headers };
        return this.http.put(this._heroesUrl + '/' + refeicao._id, body, options);
    };
    UsuarioService = __decorate([
        core_1.Injectable()
    ], UsuarioService);
    return UsuarioService;
}());
exports.UsuarioService = UsuarioService;
//# sourceMappingURL=usuario.service.js.map