import {Component, View, OnInit} from 'angular2/core';
import {HTTP_PROVIDERS}    from 'angular2/http';
import {bootstrap} from 'angular2/platform/browser';
import {Peso} from '../interfaces/peso';
import {pesoMock} from '../mocks/mock-peso';
import {PesoService} from '../services/peso-service';


@Component({
    selector: 'peso-comp',
    templateUrl : 'app/templates/peso.html',
    providers : [HTTP_PROVIDERS, PesoService ],
    directives : []

})

export class PesoComponent implements OnInit {

    title = 'Registrar Peso';
    list: Peso[] = [];
    peso : Peso = pesoMock;
    errorMessage: string;

    constructor (private _pesoService : PesoService){
        this.getPeso();
    }

    getPeso() {
        this.peso;

    }

    ngOnInit() {
        this.getPeso();
        this.getPesos();
    }


    getPesos() {
        this._pesoService.getPesos()
            .subscribe(
                data => this.populaPesos(data._body),
                error =>  this.errorMessage = <any>error);
    }
    registrar() {

        this._pesoService.addPeso(this.peso)
            .subscribe(
                data  => this.adicionaNaLista(JSON.parse(data._body)),
                error =>  this.errorMessage = <any>error);
    }

    adicionaNaLista(agua){
        agua.data = Date.parse(agua.data);
        this.list.push(agua);
    }

    populaPesos(input) {
        this.list = JSON.parse(input);
        this.list.forEach(
            function(element){
                element.data = Date.parse(element.data);
            });
        //this.refeicao = JSON.parse(input);
    }

    remover(peso : Peso){
        this._pesoService.removePeso(peso._id)
            .subscribe(
                data => this.getPesos(),
                error =>  this.errorMessage = <any>error);
    }


}
