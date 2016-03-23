import {Component} from 'angular2/core';
import { Router, RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from 'angular2/router';
import {Refeicao} from './refeicao';
import {AvaliarComponent} from './avaliar.component';
import {RegistrarComponent} from './registrar.component';
//import {TodoForm} from './todo_form';
import {refeicaoMock} from './mock-refeicao';

@Component({
  selector: 'kop-app',
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

  }
])


export class AppComponent {

  title = 'KopNutri App';
  list: Refeicao[] = [];
  refeicao : Refeicao;

  constructor(
      private _router: Router
   ) {
  }

  getRefeicao() {
    this.refeicao = refeicaoMock;

  }

  ngOnInit() {
    this.getRefeicao();
  }


  goToAvaliar() {
    console.log('goToAvaliar()');
    this._router.navigate(['Avaliar']);
  }

  goToRegistrar() {
    console.log('goToRegistrar()');
    this._router.navigate(['Registrar']);
  }

}
