"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('angular2/core');
var router_1 = require('angular2/router');
var http_1 = require('angular2/http');
var avaliar_component_1 = require('./avaliar.component');
var agua_component_1 = require('./agua.component');
var peso_component_1 = require('./peso.component');
var registrar_component_1 = require('./registrar.component');
var usuario_service_1 = require("../services/usuario.service");
var AppComponent = (function () {
    function AppComponent(_router, _usuarioService) {
        this._router = _router;
        this._usuarioService = _usuarioService;
        this.title = 'KopNutri App';
        this.logado = false;
        this.isAtleta = false;
        this.usuario = {};
    }
    AppComponent.prototype.ngOnInit = function () {
    };
    AppComponent.prototype.goToAvaliar = function () {
        this._router.navigate(['Avaliar']);
    };
    AppComponent.prototype.goToRegistrar = function () {
        this._router.navigate(['Registrar']);
    };
    AppComponent.prototype.goToAgua = function () {
        this._router.navigate(['Agua']);
    };
    AppComponent.prototype.goToPeso = function () {
        this._router.navigate(['Peso']);
    };
    AppComponent.prototype.login = function () {
        var _this = this;
        this._usuarioService.login(this.usuario)
            .subscribe(function (data) { return _this.changeScreen(JSON.parse(data._body)); }, function (error) { return _this.errorMessage = error; });
    };
    AppComponent.prototype.changeScreen = function (usuario) {
        console.log(usuario);
        if (usuario != null) {
            this.logado = true;
            if (usuario.type == "ATLETA") {
                this.isAtleta = true;
                this.goToRegistrar();
            }
            else {
                this.isAtleta = false;
                this.goToAvaliar();
            }
        }
        else {
            this.errorMessage = 'Usuário ou senha inválidos';
            this.logado = false;
        }
    };
    AppComponent.prototype.logout = function () {
        this.logado = false;
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'kop-app',
            template: "\n  <span>{{errorMessage}}</span>\n<div *ngIf=\"logado\">\n  <nav class=\"text-center\">\n    <button *ngIf=\"isAtleta\" (click)=\"goToRegistrar()\">Registrar</button>\n    <button *ngIf=\"!isAtleta\" (click)=\"goToAvaliar()\">Avaliar</button>\n    <button *ngIf=\"isAtleta\" (click)=\"goToAgua()\">Agua</button>\n    <button *ngIf=\"isAtleta\" (click)=\"goToPeso()\">Peso</button>\n    <button (click)=\"logout()\">Sair</button>\n  </nav>\n  <router-outlet></router-outlet>\n</div>\n<div class=\"text-center\">\n<div *ngIf=\"!logado\"  class=\"col-xs-3 text-center\" >\n  <input [(ngModel)]=\"usuario.login\"  type=\"text\" id=\"username\" class=\"form-control \" >\n  <input [(ngModel)]=\"usuario.senha\"  type=\"text\" id=\"password\" class=\"form-control \" >\n  <a (click)=\"login()\" class=\"btn btn-info\">Login</a>\n</div>\n</div>\n  ",
            directives: [router_1.ROUTER_DIRECTIVES],
            providers: [
                router_1.ROUTER_PROVIDERS, http_1.HTTP_PROVIDERS, usuario_service_1.UsuarioService
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
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map