import {Component} from 'angular2/core';
import { Router, RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from 'angular2/router';
import {Refeicao} from '../interfaces/refeicao';
import {AvaliarComponent} from './avaliar.component';
import {AguaComponent} from './agua.component';
import {PesoComponent} from './peso.component';
import {RegistrarComponent} from './registrar.component';
//import {TodoForm} from './todo_form';
import {refeicaoMock} from '../mocks/mock-refeicao';

@Component({
  selector: 'kop-app',
  template : `
    <nav>
    <button (click)="goToRegistrar()">Registrar</button>
    <button (click)="goToAvaliar()">Avaliar</button>
    <button (click)="goToAgua()">Agua</button>
    <button (click)="goToPeso()">Peso</button>
    </nav>
    <router-outlet></router-outlet>
  `,
  templateUrl : 'app/principal.html',
  directives: [ROUTER_DIRECTIVES],
  providers: [
    ROUTER_PROVIDERS
  ]
})

@RouteConfig([
  {
    path: '/',
    name: 'Avaliar',
    component: AvaliarComponent,
    useAsDefault: true
  },
  {
    path: '/registrar',
    name: 'Registrar',
    component: RegistrarComponent,

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


export class AppComponent {
  title = 'KopNutri App';

  constructor(private _router: Router) { }

  goToAvaliar() {
    console.log('goToAvaliar()');
    this._router.navigate(['Avaliar']);
  }

  goToRegistrar() {
    console.log('goToRegistrar()');
    this._router.navigate(['Registrar']);
  }

  goToAgua() {
    console.log('goToAgua()');
    this._router.navigate(['Agua']);
  }

  goToPeso() {
    console.log('goToPeso()');
    this._router.navigate(['Peso']);
  }

}
