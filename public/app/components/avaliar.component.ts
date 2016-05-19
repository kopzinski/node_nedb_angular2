import {Component, View, OnInit} from 'angular2/core';
import {HTTP_PROVIDERS}    from 'angular2/http';
import {bootstrap} from 'angular2/platform/browser';
import {Refeicao} from '../interfaces/refeicao';
import {refeicaoMock} from '../mocks/mock-refeicao';
import {RefeicaoService} from '../services/refeicao.service';

@Component({
    selector: 'avaliar-comp',
    templateUrl : 'app/templates/avaliar.html',
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
                data => this.populaRefeicoes( data._body),
                error =>  this.errorMessage = <any>error);
    }

    populaRefeicoes(input) {
        this.list = JSON.parse(input);
        this.list.forEach(
            function(element) {
                element.data = Date.parse(element.data);
            });

        this.refeicao = this.list[0];
    }

    aprovar(refeicao : Refeicao){
        refeicao.status = 'APROVADO';
        this.salvar(refeicao);
        this.getRefeicoes();
    }

    reprovar(refeicao : Refeicao){
        refeicao.status = 'REPROVADO';
        this.salvar(refeicao);
        this.getRefeicoes();
    }

    salvar(refeicao : Refeicao) {

        this.refeicao = refeicao;
        var index = this.list.indexOf(this.refeicao, 0);
        if (index > -1) {
            this.list.splice(index, 1);
        }

        this._refeicaoService.saveRefeicao(this.refeicao)
            .subscribe(
                data  => console.log(data),
                error =>  this.errorMessage = <any>error);
    }


}
