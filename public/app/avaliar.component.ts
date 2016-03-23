import {Component, View, OnInit} from 'angular2/core';
import {HTTP_PROVIDERS}    from 'angular2/http';
import {bootstrap} from 'angular2/platform/browser';
import {Refeicao} from './refeicao';
import {refeicaoMock} from './mock-refeicao';
import {RefeicaoService} from './refeicao.service';




@Component({
    selector: 'avaliar-comp',
    templateUrl : 'app/avaliar.html',
    providers : [HTTP_PROVIDERS,RefeicaoService ],
    directives : []
})

export class AvaliarComponent implements OnInit {

    title = 'Avaliar Refeição';
    list: Refeicao[] = [];
    refeicao : Refeicao = refeicaoMock;
    errorMessage: string ;

    constructor (private _refeicaoService : RefeicaoService){
        this.getRefeicao();
    }

    getRefeicao() {
        this.refeicao;
    }

    ngOnInit() {
        this.getRefeicao();
        this.getRefeicoes();
    }

    getRefeicoes() {
        this._refeicaoService.getRefeicoes()
            .subscribe(
                data => this.populaRefeicao( data._body),
                error =>  this.errorMessage = <any>error);
        console.log(this.list);
    }

    populaRefeicao(input) {
        this.refeicao = JSON.parse(input);
    }

    aprovar(){
        this.refeicao.status = 'APROVADO';
        this.salvar();
    }

    reprovar(){
        this.refeicao.status = 'REPROVADO';
        this.salvar();
    }

    salvar() {
        this._refeicaoService.saveRefeicao(this.refeicao)
            .subscribe(
                hero  => this.list.push(hero),
                error =>  this.errorMessage = <any>error);
    }


}
