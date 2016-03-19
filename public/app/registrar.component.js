var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('angular2/core');
//import {TodoList} from './todo_list';
//import {TodoForm} from './todo_form';
var mock_refeicao_1 = require('./mock-refeicao');
var RegistrarComponent = (function () {
    function RegistrarComponent() {
        this.title = 'Registrar Refeição';
        this.list = [];
    }
    RegistrarComponent.prototype.getRefeicao = function () {
        this.refeicao = mock_refeicao_1.refeicaoMock;
    };
    RegistrarComponent.prototype.ngOnInit = function () {
        this.getRefeicao();
    };
    RegistrarComponent.prototype.registrar = function () {
        console.log('Registrar');
    };
    RegistrarComponent = __decorate([
        core_1.Component({
            selector: 'registrar-comp',
            templateUrl: 'app/registrar.html'
        })
    ], RegistrarComponent);
    return RegistrarComponent;
})();
exports.RegistrarComponent = RegistrarComponent;
//# sourceMappingURL=registrar.component.js.map