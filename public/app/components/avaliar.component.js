"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('angular2/core');
var http_1 = require('angular2/http');
var mock_refeicao_1 = require('../mocks/mock-refeicao');
var refeicao_service_1 = require('../services/refeicao.service');
var AvaliarComponent = (function () {
    function AvaliarComponent(_refeicaoService) {
        this._refeicaoService = _refeicaoService;
        this.title = 'Avaliar Refeição';
        this.list = [];
        this.refeicao = mock_refeicao_1.refeicaoMock;
        this.getRefeicao();
    }
    AvaliarComponent.prototype.getRefeicao = function () {
        this.refeicao;
    };
    AvaliarComponent.prototype.ngOnInit = function () {
        this.getRefeicao();
        this.getRefeicoes();
    };
    AvaliarComponent.prototype.getRefeicoes = function () {
        var _this = this;
        this._refeicaoService.getRefeicoes()
            .subscribe(function (data) { return _this.populaRefeicoes(data._body); }, function (error) { return _this.errorMessage = error; });
    };
    AvaliarComponent.prototype.populaRefeicoes = function (input) {
        this.list = JSON.parse(input);
        this.list.forEach(function (element) {
            element.data = Date.parse(element.data);
        });
        this.refeicao = this.list[0];
    };
    AvaliarComponent.prototype.aprovar = function (refeicao) {
        refeicao.status = 'APROVADO';
        this.salvar(refeicao);
        this.getRefeicoes();
    };
    AvaliarComponent.prototype.reprovar = function (refeicao) {
        refeicao.status = 'REPROVADO';
        this.salvar(refeicao);
        this.getRefeicoes();
    };
    AvaliarComponent.prototype.salvar = function (refeicao) {
        var _this = this;
        this.refeicao = refeicao;
        var index = this.list.indexOf(this.refeicao, 0);
        if (index > -1) {
            this.list.splice(index, 1);
        }
        this._refeicaoService.saveRefeicao(this.refeicao)
            .subscribe(function (data) { return console.log(data); }, function (error) { return _this.errorMessage = error; });
    };
    AvaliarComponent = __decorate([
        core_1.Component({
            selector: 'avaliar-comp',
            templateUrl: 'app/templates/avaliar.html',
            providers: [http_1.HTTP_PROVIDERS, refeicao_service_1.RefeicaoService],
            directives: []
        })
    ], AvaliarComponent);
    return AvaliarComponent;
}());
exports.AvaliarComponent = AvaliarComponent;
//# sourceMappingURL=avaliar.component.js.map