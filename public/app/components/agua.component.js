var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('angular2/core');
var http_1 = require('angular2/http');
var mock_agua_1 = require('../mocks/mock-agua');
var agua_service_1 = require('../services/agua-service');
var AguaComponent = (function () {
    function AguaComponent(_aguaService) {
        this._aguaService = _aguaService;
        this.title = 'Registrar Água';
        this.list = [];
        this.agua = mock_agua_1.aguaMock;
        this.getAgua();
    }
    AguaComponent.prototype.getAgua = function () {
        this.agua;
    };
    AguaComponent.prototype.ngOnInit = function () {
        this.getAgua();
        this.getAguas();
        console.log(this.list);
    };
    AguaComponent.prototype.getAguas = function () {
        var _this = this;
        this._aguaService.getAguas()
            .subscribe(function (data) { return _this.populaAguas(data._body); }, function (error) { return _this.errorMessage = error; });
    };
    AguaComponent.prototype.registrar = function () {
        var _this = this;
        this._aguaService.addAgua(this.agua)
            .subscribe(function (data) { return _this.populaAguas(data._body); }, function (error) { return _this.errorMessage = error; });
    };
    AguaComponent.prototype.populaAguas = function (input) {
        this.list = JSON.parse(input);
        //this.refeicao = JSON.parse(input);
    };
    AguaComponent = __decorate([
        core_1.Component({
            selector: 'agua-comp',
            templateUrl: 'app/templates/agua.html',
            providers: [http_1.HTTP_PROVIDERS, agua_service_1.AguaService],
            directives: []
        })
    ], AguaComponent);
    return AguaComponent;
})();
exports.AguaComponent = AguaComponent;
//# sourceMappingURL=agua.component.js.map