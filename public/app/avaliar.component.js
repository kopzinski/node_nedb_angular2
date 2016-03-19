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
var AvaliarComponent = (function () {
    function AvaliarComponent() {
        this.title = 'Avaliar Refeição';
        this.list = [];
    }
    AvaliarComponent.prototype.getRefeicao = function () {
        this.refeicao = mock_refeicao_1.refeicaoMock;
    };
    AvaliarComponent.prototype.ngOnInit = function () {
        this.getRefeicao();
    };
    AvaliarComponent.prototype.aprovar = function () {
        console.log('Aprovar');
    };
    AvaliarComponent.prototype.reprovar = function () {
        console.log('Reprovar');
    };
    AvaliarComponent = __decorate([
        core_1.Component({
            selector: 'avaliar-comp',
            templateUrl: 'app/avaliar.html',
            styles: ['a { cursor: pointer; cursor: hand; }']
        })
    ], AvaliarComponent);
    return AvaliarComponent;
})();
exports.AvaliarComponent = AvaliarComponent;
//# sourceMappingURL=avaliar.component.js.map