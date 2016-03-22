import {Component, OnInit} from 'angular2/core';
import {HTTP_PROVIDERS}    from 'angular2/http';
import {Refeicao} from './refeicao';
//import {TodoList} from './todo_list';
//import {TodoForm} from './todo_form';
import {refeicaoMock} from './mock-refeicao';
import {RefeicaoService} from './refeicao.service';


@Component({
    selector: 'registrar-comp',
    templateUrl : 'app/registrar.html',
    providers : [HTTP_PROVIDERS,RefeicaoService ]

})

export class RegistrarComponent implements OnInit{

    title = 'Registrar Refeição';
    list: Refeicao[] = [];
    refeicao : Refeicao;
    errorMessage: string;

    constructor (private _refeicaoService : RefeicaoService){}

    getRefeicao() {
        this.refeicao = refeicaoMock;


    }

    ngOnInit() {        this.getRefeicao();   this.getRefeicoes(); }

    registrar(){
        console.log('Registrar');
        this.addHero('Paulo');
    }

    getRefeicoes() {
        //this._refeicaoService.getRefeicoes()
        //    .subscribe(
        //        heroes => this.list = heroes,
        //        error =>  this.errorMessage = <any>error);
    }
    addHero (name: string) {
        if (!name) {return;}
        this._refeicaoService.addRefeicao('aaa')
            .subscribe(
                hero  => this.list.push(hero),
                error =>  this.errorMessage = <any>error);
    }


}
