var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('angular2/core');
var http_1 = require('angular2/http');
//import {TodoList} from './todo_list';
//import {TodoForm} from './todo_form';
var mock_refeicao_1 = require('./mock-refeicao');
var refeicao_service_1 = require('./refeicao.service');
var RegistrarComponent = (function () {
    function RegistrarComponent(_refeicaoService) {
        this._refeicaoService = _refeicaoService;
        this.title = 'Registrar Refeição';
        this.list = [];
    }
    RegistrarComponent.prototype.getRefeicao = function () {
        this.refeicao = mock_refeicao_1.refeicaoMock;
    };
    RegistrarComponent.prototype.ngOnInit = function () { this.getRefeicao(); this.getRefeicoes(); };
    RegistrarComponent.prototype.registrar = function () {
        console.log('Registrar');
        this.addHero('Paulo');
    };
    RegistrarComponent.prototype.getRefeicoes = function () {
        //this._refeicaoService.getRefeicoes()
        //    .subscribe(
        //        heroes => this.list = heroes,
        //        error =>  this.errorMessage = <any>error);
    };
    RegistrarComponent.prototype.addHero = function (name) {
        var _this = this;
        if (!name) {
            return;
        }
        this._refeicaoService.addRefeicao('aaa')
            .subscribe(function (hero) { return _this.list.push(hero); }, function (error) { return _this.errorMessage = error; });
    };
    RegistrarComponent = __decorate([
        core_1.Component({
            selector: 'registrar-comp',
            templateUrl: 'app/registrar.html',
            providers: [http_1.HTTP_PROVIDERS, refeicao_service_1.RefeicaoService]
        })
    ], RegistrarComponent);
    return RegistrarComponent;
})();
exports.RegistrarComponent = RegistrarComponent;
//# sourceMappingURL=registrar.component.js.map