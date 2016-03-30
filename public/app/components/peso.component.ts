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
        console.log(this.list);
    }


    getPesos() {
        this._pesoService.getPesos()
            .subscribe(
                pesos => this.list = pesos,
                error =>  this.errorMessage = <any>error);
    }
    registrar() {

        this._pesoService.addPeso(this.peso)
            .subscribe(
                data  => this.populaPesos(data._body),
                error =>  this.errorMessage = <any>error);
    }

    populaPesos(input) {
        this.list = JSON.parse(input);
        //this.refeicao = JSON.parse(input);
    }

}
