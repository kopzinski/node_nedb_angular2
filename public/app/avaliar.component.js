var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('angular2/core');
var http_1 = require('angular2/http');
var mock_refeicao_1 = require('./mock-refeicao');
var refeicao_service_1 = require('./refeicao.service');
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
            .subscribe(function (data) { return _this.populaRefeicao(data._body); }, function (error) { return _this.errorMessage = error; });
        console.log(this.list);
    };
    AvaliarComponent.prototype.populaRefeicao = function (input) {
        this.refeicao = JSON.parse(input);
    };
    AvaliarComponent.prototype.aprovar = function () {
        this.refeicao.status = 'APROVADO';
        this.salvar();
    };
    AvaliarComponent.prototype.reprovar = function () {
        this.refeicao.status = 'REPROVADO';
        this.salvar();
    };
    AvaliarComponent.prototype.salvar = function () {
        var _this = this;
        this._refeicaoService.saveRefeicao(this.refeicao)
            .subscribe(function (hero) { return _this.list.push(hero); }, function (error) { return _this.errorMessage = error; });
    };
    AvaliarComponent = __decorate([
        core_1.Component({
            selector: 'avaliar-comp',
            templateUrl: 'app/avaliar.html',
            providers: [http_1.HTTP_PROVIDERS, refeicao_service_1.RefeicaoService],
            directives: []
        })
    ], AvaliarComponent);
    return AvaliarComponent;
})();
exports.AvaliarComponent = AvaliarComponent;
//# sourceMappingURL=avaliar.component.js.map