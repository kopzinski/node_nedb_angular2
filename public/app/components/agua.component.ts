import {Component, View, OnInit} from 'angular2/core';
import {HTTP_PROVIDERS}    from 'angular2/http';
import {bootstrap} from 'angular2/platform/browser';
import {Agua} from '../interfaces/agua';
import {aguaMock} from '../mocks/mock-agua';
import {AguaService} from '../services/agua-service';


@Component({
    selector: 'agua-comp',
    templateUrl : 'app/templates/agua.html',
    providers : [HTTP_PROVIDERS, AguaService ],
    directives : []

})

export class AguaComponent implements OnInit {

    title = 'Registrar Água';
    list: Agua[] = [];
    agua : Agua = aguaMock;
    errorMessage: string;
    dataTeste;

    constructor (private _aguaService : AguaService){
        this.getAgua();
    }

    getAgua() {
        this.agua;

    }

    ngOnInit() {
        this.getAgua();
        this.getAguas();
    }


    getAguas() {
        this._aguaService.getAguas()
            .subscribe(
                data => this.populaAguas(data._body),
                error =>  this.errorMessage = <any>error);
    }
    registrar() {

        this._aguaService.addAgua(this.agua)
            .subscribe(
                data  => this.adicionaNaLista(JSON.parse(data._body)),
                error =>  this.errorMessage = <any>error);
    }
    adicionaNaLista(agua){
        agua.data = Date.parse(agua.data);
        this.list.push(agua);
    }

    populaAguas(input) {
        this.list = JSON.parse(input);
        this.list.forEach(
            function(element){
                element.data = Date.parse(element.data);
            });
        //this.refeicao = JSON.parse(input);
    }

    remover(agua: Agua){
        this._aguaService.removeAgua(agua._id)
            .subscribe(
                data => this.getAguas(),
                error =>  this.errorMessage = <any>error);
    }

}
