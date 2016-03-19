import {Component} from 'angular2/core';
import {Refeicao} from './refeicao';
//import {TodoList} from './todo_list';
//import {TodoForm} from './todo_form';
import {refeicaoMock} from './mock-refeicao';


@Component({
    selector: 'registrar-comp',
    templateUrl : 'app/registrar.html'

})

export class RegistrarComponent {

    title = 'Registrar Refeição';
    list: Refeicao[] = [];
    refeicao : Refeicao;

    getRefeicao() {
        this.refeicao = refeicaoMock;

    }

    ngOnInit() {
        this.getRefeicao();
    }

    registrar(){
        console.log('Registrar');
    }


}
