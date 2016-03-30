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

    constructor (private _aguaService : AguaService){
        this.getAgua();
    }

    getAgua() {
        this.agua;

    }

    ngOnInit() {
        this.getAgua();
        this.getAguas();
        console.log(this.list);
    }


    getAguas() {
        this._aguaService.getAguas()
            .subscribe(
                aguas => this.list = aguas,
                error =>  this.errorMessage = <any>error);
    }
    registrar() {

        this._aguaService.addAgua(this.agua)
            .subscribe(
                data  => this.populaAguas(data._body),
                error =>  this.errorMessage = <any>error);
    }

    populaAguas(input) {
        this.list = JSON.parse(input);
        //this.refeicao = JSON.parse(input);
    }

}
