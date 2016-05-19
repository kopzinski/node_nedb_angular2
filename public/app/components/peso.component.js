"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('angular2/core');
var http_1 = require('angular2/http');
var mock_peso_1 = require('../mocks/mock-peso');
var peso_service_1 = require('../services/peso-service');
var PesoComponent = (function () {
    function PesoComponent(_pesoService) {
        this._pesoService = _pesoService;
        this.title = 'Registrar Peso';
        this.list = [];
        this.peso = mock_peso_1.pesoMock;
        this.getPeso();
    }
    PesoComponent.prototype.getPeso = function () {
        this.peso;
    };
    PesoComponent.prototype.ngOnInit = function () {
        this.getPeso();
        this.getPesos();
    };
    PesoComponent.prototype.getPesos = function () {
        var _this = this;
        this._pesoService.getPesos()
            .subscribe(function (data) { return _this.populaPesos(data._body); }, function (error) { return _this.errorMessage = error; });
    };
    PesoComponent.prototype.registrar = function () {
        var _this = this;
        this._pesoService.addPeso(this.peso)
            .subscribe(function (data) { return _this.adicionaNaLista(JSON.parse(data._body)); }, function (error) { return _this.errorMessage = error; });
    };
    PesoComponent.prototype.adicionaNaLista = function (agua) {
        agua.data = Date.parse(agua.data);
        this.list.push(agua);
    };
    PesoComponent.prototype.populaPesos = function (input) {
        this.list = JSON.parse(input);
        this.list.forEach(function (element) {
            element.data = Date.parse(element.data);
        });
        //this.refeicao = JSON.parse(input);
    };
    PesoComponent.prototype.remover = function (peso) {
        var _this = this;
        this._pesoService.removePeso(peso._id)
            .subscribe(function (data) { return _this.getPesos(); }, function (error) { return _this.errorMessage = error; });
    };
    PesoComponent = __decorate([
        core_1.Component({
            selector: 'peso-comp',
            templateUrl: 'app/templates/peso.html',
            providers: [http_1.HTTP_PROVIDERS, peso_service_1.PesoService],
            directives: []
        })
    ], PesoComponent);
    return PesoComponent;
}());
exports.PesoComponent = PesoComponent;
//# sourceMappingURL=peso.component.js.map