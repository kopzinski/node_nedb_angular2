var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('angular2/core');
var Observable_1 = require('rxjs/Observable');
var http_1 = require('angular2/http');
var PesoService = (function () {
    function PesoService(http) {
        this.http = http;
        this._pesosUrl = 'v1/pesos'; // URL to web api
    }
    PesoService.prototype.getPeso = function (pesoId) {
        return this.http.get(this._pesosUrl + '/' + pesoId);
    };
    PesoService.prototype.getPesos = function () {
        return this.http.get(this._pesosUrl);
    };
    PesoService.prototype.addPeso = function (peso) {
        var body = JSON.stringify(peso);
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = { headers: headers };
        return this.http.post(this._pesosUrl, body, options);
    };
    PesoService.prototype.savePeso = function (peso) {
        var body = JSON.stringify(peso);
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = { headers: headers };
        return this.http.put(this._pesosUrl + '/' + peso._id, body, options);
    };
    PesoService.prototype.removePeso = function (pesoId) {
        console.log('removendo' + pesoId);
        return this.http.delete(this._pesosUrl + '/' + pesoId);
    };
    PesoService.prototype.handleError = function (error) {
        console.error(error);
        return Observable_1.Observable.throw(error.json().error || 'Server error');
    };
    PesoService = __decorate([
        core_1.Injectable()
    ], PesoService);
    return PesoService;
})();
exports.PesoService = PesoService;
//# sourceMappingURL=peso-service.js.map