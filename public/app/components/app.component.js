var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('angular2/core');
var router_1 = require('angular2/router');
var avaliar_component_1 = require('./avaliar.component');
var agua_component_1 = require('./agua.component');
var peso_component_1 = require('./peso.component');
var registrar_component_1 = require('./registrar.component');
var AppComponent = (function () {
    function AppComponent(_router) {
        this._router = _router;
        this.title = 'KopNutri App';
    }
    AppComponent.prototype.goToAvaliar = function () {
        console.log('goToAvaliar()');
        this._router.navigate(['Avaliar']);
    };
    AppComponent.prototype.goToRegistrar = function () {
        console.log('goToRegistrar()');
        this._router.navigate(['Registrar']);
    };
    AppComponent.prototype.goToAgua = function () {
        console.log('goToAgua()');
        this._router.navigate(['Agua']);
    };
    AppComponent.prototype.goToPeso = function () {
        console.log('goToPeso()');
        this._router.navigate(['Peso']);
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'kop-app',
            template: "\n    <nav>\n    <button (click)=\"goToRegistrar()\">Registrar</button>\n    <button (click)=\"goToAvaliar()\">Avaliar</button>\n    <button (click)=\"goToAgua()\">Agua</button>\n    <button (click)=\"goToPeso()\">Peso</button>\n    </nav>\n    <router-outlet></router-outlet>\n  ",
            templateUrl: 'app/principal.html',
            directives: [router_1.ROUTER_DIRECTIVES],
            providers: [
                router_1.ROUTER_PROVIDERS
            ]
        }),
        router_1.RouteConfig([
            {
                path: '/avaliar',
                name: 'Avaliar',
                component: avaliar_component_1.AvaliarComponent
            },
            {
                path: '/',
                name: 'Registrar',
                component: registrar_component_1.RegistrarComponent,
                useAsDefault: true
            },
            {
                path: '/agua',
                name: 'Agua',
                component: agua_component_1.AguaComponent
            },
            {
                path: '/peso',
                name: 'Peso',
                component: peso_component_1.PesoComponent
            }
        ])
    ], AppComponent);
    return AppComponent;
})();
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map