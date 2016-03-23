import {Component, View, OnInit} from 'angular2/core';
import {HTTP_PROVIDERS}    from 'angular2/http';
import {bootstrap} from 'angular2/platform/browser';
import {Refeicao} from './refeicao';
import {refeicaoMock} from './mock-refeicao';
import {RefeicaoService} from './refeicao.service';


@Component({
    selector: 'registrar-comp',
    templateUrl : 'app/registrar.html',
    providers : [HTTP_PROVIDERS,RefeicaoService ],
    directives : []

})

export class RegistrarComponent implements OnInit {

    filesToUpload: Array<File>;

    title = 'Registrar Refeição';
    list: Refeicao[] = [];
    refeicao : Refeicao = refeicaoMock;
    errorMessage: string;

    constructor (private _refeicaoService : RefeicaoService){
        this.getRefeicao();
        this.filesToUpload = [];
    }

    upload() {
        this.makeFileRequest("/v1/photos", [], this.filesToUpload, this.refeicao).then((result) => {
            console.log('Kop! sucesso');
            console.log(result);
        }, (error) => {
            console.log('Kop! erro');
            //console.error(error);
        });
    }

    fileChangeEvent(fileInput: any){
        this.filesToUpload = <Array<File>> fileInput.target.files;
    }

    makeFileRequest(url: string, params: Array<string>, files: Array<File>,ref : Refeicao) {
        console.log(this.refeicao);
        return new Promise((resolve, reject) => {
            var formData: any = new FormData();
            var xhr = new XMLHttpRequest();
            for(var i = 0; i < files.length; i++) {
                formData.append("uploads", files[i], files[i].name);
            }
            xhr.onreadystatechange = function () {
                if (xhr.readyState == 4) {
                    if (xhr.status == 200) {
                        ref.foto = 'uploads/fotos/' + xhr.response;
                    } else {
                        reject(xhr.response);
                    }
                }
            }
            xhr.open("POST", url, true);
            xhr.send(formData);

        });

    }

    getRefeicao() {
        this.refeicao;

    }

    ngOnInit() {
        this.getRefeicao();
        this.getRefeicoes();
        console.log(this.list);
    }


    getRefeicoes() {
        this._refeicaoService.getRefeicoes()
            .subscribe(
                refeicoes => this.list = refeicoes,
                error =>  this.errorMessage = <any>error);
    }
    registrar() {

        this._refeicaoService.addRefeicao(this.refeicao)
            .subscribe(
                data  => this.populaRefeicoes(data._body),
                error =>  this.errorMessage = <any>error);
    }

    populaRefeicoes(input) {
        this.list = JSON.parse(input);
        //this.refeicao = JSON.parse(input);
    }

}
