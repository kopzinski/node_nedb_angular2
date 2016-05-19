import {Component, OnInit} from 'angular2/core';
import { Router, RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from 'angular2/router';
import {HTTP_PROVIDERS}    from 'angular2/http';
import {AvaliarComponent} from './avaliar.component';
import {AguaComponent} from './agua.component';
import {PesoComponent} from './peso.component';
import {RegistrarComponent} from './registrar.component';
import {UsuarioService} from "../services/usuario.service";
import {Usuario} from "../interfaces/usuario";


@Component({
  selector: 'kop-app',
  template : `
  <span>{{errorMessage}}</span>
<div *ngIf="logado">
  <nav class="text-center">
    <button *ngIf="isAtleta" (click)="goToRegistrar()">Registrar</button>
    <button *ngIf="!isAtleta" (click)="goToAvaliar()">Avaliar</button>
    <button *ngIf="isAtleta" (click)="goToAgua()">Agua</button>
    <button *ngIf="isAtleta" (click)="goToPeso()">Peso</button>
    <button (click)="logout()">Sair</button>
  </nav>
  <router-outlet></router-outlet>
</div>
<div class="text-center">
<div *ngIf="!logado"  class="col-xs-3 text-center" >
  <input [(ngModel)]="usuario.login"  type="text" id="username" class="form-control " >
  <input [(ngModel)]="usuario.senha"  type="text" id="password" class="form-control " >
  <a (click)="login()" class="btn btn-info">Login</a>
</div>
</div>
  `,
  directives: [ROUTER_DIRECTIVES],
  providers: [
    ROUTER_PROVIDERS, HTTP_PROVIDERS, UsuarioService
  ]
})

@RouteConfig([
  {
    path: '/avaliar',
    name: 'Avaliar',
    component: AvaliarComponent,
  },
  {
    path: '/',
    name: 'Registrar',
    component: RegistrarComponent,
    useAsDefault: true
  },
  {
    path: '/agua',
    name: 'Agua',
    component: AguaComponent,

  },
  {
    path: '/peso',
    name: 'Peso',
    component: PesoComponent,

  }
])


export class AppComponent implements OnInit {
  title = 'KopNutri App';
  logado = false;
  isAtleta = false;
  usuario : Usuario = {};
  errorMessage: string;

  constructor(private _router: Router, private _usuarioService : UsuarioService) { }

  ngOnInit() {
  }

  goToAvaliar() {
    this._router.navigate(['Avaliar']);
  }

  goToRegistrar() {
    this._router.navigate(['Registrar']);
  }

  goToAgua() {
    this._router.navigate(['Agua']);
  }

  goToPeso() {
    this._router.navigate(['Peso']);
  }

  login(){
    this._usuarioService.login(this.usuario)
        .subscribe(
            data  => this.changeScreen(JSON.parse(data._body)),
            error =>  this.errorMessage = <any>error);
  }

  changeScreen( usuario ) {
    console.log(usuario);
    if(usuario != null) {
      this.logado = true;
      if(usuario.type == "ATLETA") {
        this.isAtleta = true;
      }
    } else {
      this.errorMessage = 'Usuário ou senha inválidos';
      this.logado = false;
    }

  }

  logout() {
    this.logado = false;
  }


}
