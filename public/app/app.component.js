var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('angular2/core');
var router_1 = require('angular2/router');
var avaliar_component_1 = require('./avaliar.component');
var registrar_component_1 = require('./registrar.component');
var AppComponent = (function () {
    //list: Refeicao[] = [];
    //refeicao : Refeicao;
    function AppComponent(_router) {
        this._router = _router;
        this.title = 'KopNutri App';
    }
    //getRefeicao() {
    //  this.refeicao = refeicaoMock;
    //
    //}
    AppComponent.prototype.ngOnInit = function () {
        //this.getRefeicao();
    };
    AppComponent.prototype.goToAvaliar = function () {
        console.log('goToAvaliar()');
        this._router.navigate(['Avaliar']);
    };
    AppComponent.prototype.goToRegistrar = function () {
        console.log('goToRegistrar()');
        this._router.navigate(['Registrar']);
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'kop-app',
            templateUrl: 'app/principal.html',
            directives: [router_1.ROUTER_DIRECTIVES],
            providers: [
                router_1.ROUTER_PROVIDERS
            ]
        }),
        router_1.RouteConfig([
            {
                path: '/',
                name: 'Avaliar',
                component: avaliar_component_1.AvaliarComponent,
                useAsDefault: true
            },
            {
                path: '/registrar',
                name: 'Registrar',
                component: registrar_component_1.RegistrarComponent
            }
        ])
    ], AppComponent);
    return AppComponent;
})();
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map