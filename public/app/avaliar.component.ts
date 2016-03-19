import {Component} from 'angular2/core';
import {Refeicao} from './refeicao';
//import {TodoList} from './todo_list';
//import {TodoForm} from './todo_form';
import {refeicaoMock} from './mock-refeicao';


@Component({
    selector: 'avaliar-comp',
    templateUrl : 'app/avaliar.html',

    styles:['a { cursor: pointer; cursor: hand; }']

})

export class AvaliarComponent {

    title = 'Avaliar Refeição';
    list: Refeicao[] = [];
    refeicao : Refeicao;

    getRefeicao() {
        this.refeicao = refeicaoMock;

    }

    ngOnInit() {
        this.getRefeicao();
    }

    aprovar(){
        console.log('Aprovar');
    }

    reprovar(){
        console.log('Reprovar');
    }

}
