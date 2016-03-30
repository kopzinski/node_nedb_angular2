var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('angular2/core');
var Observable_1 = require('rxjs/Observable');
var http_1 = require('angular2/http');
var AguaService = (function () {
    function AguaService(http) {
        this.http = http;
        this._aguasUrl = 'v1/aguas'; // URL to web api
    }
    AguaService.prototype.getAgua = function (aguaId) {
        return this.http.get(this._aguasUrl + '/' + aguaId);
    };
    AguaService.prototype.getAguas = function () {
        return this.http.get(this._aguasUrl);
    };
    AguaService.prototype.addAgua = function (agua) {
        var body = JSON.stringify(agua);
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = { headers: headers };
        return this.http.post(this._aguasUrl, body, options);
    };
    AguaService.prototype.saveAgua = function (agua) {
        var body = JSON.stringify(agua);
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = { headers: headers };
        return this.http.put(this._aguasUrl + '/' + agua._id, body, options);
    };
    AguaService.prototype.handleError = function (error) {
        console.error(error);
        return Observable_1.Observable.throw(error.json().error || 'Server error');
    };
    AguaService = __decorate([
        core_1.Injectable()
    ], AguaService);
    return AguaService;
})();
exports.AguaService = AguaService;
//# sourceMappingURL=agua-service.js.map