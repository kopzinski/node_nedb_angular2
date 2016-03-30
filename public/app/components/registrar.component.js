var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('angular2/core');
var http_1 = require('angular2/http');
var mock_refeicao_1 = require('../mocks/mock-refeicao');
var refeicao_service_1 = require('../services/refeicao.service');
var RegistrarComponent = (function () {
    function RegistrarComponent(_refeicaoService) {
        this._refeicaoService = _refeicaoService;
        this.title = 'Registrar Refeição';
        this.list = [];
        this.refeicao = mock_refeicao_1.refeicaoMock;
        this.getRefeicao();
        this.filesToUpload = [];
    }
    RegistrarComponent.prototype.upload = function () {
        this.makeFileRequest("/v1/photos", [], this.filesToUpload, this.refeicao).then(function (result) {
            console.log('Kop! sucesso');
            console.log(result);
        }, function (error) {
            console.log('Kop! erro');
            //console.error(error);
        });
    };
    RegistrarComponent.prototype.fileChangeEvent = function (fileInput) {
        this.filesToUpload = fileInput.target.files;
    };
    RegistrarComponent.prototype.makeFileRequest = function (url, params, files, ref) {
        console.log(this.refeicao);
        return new Promise(function (resolve, reject) {
            var formData = new FormData();
            var xhr = new XMLHttpRequest();
            for (var i = 0; i < files.length; i++) {
                formData.append("uploads", files[i], files[i].name);
            }
            xhr.onreadystatechange = function () {
                if (xhr.readyState == 4) {
                    if (xhr.status == 200) {
                        ref.foto = 'uploads/fotos/' + xhr.response;
                    }
                    else {
                        reject(xhr.response);
                    }
                }
            };
            xhr.open("POST", url, true);
            xhr.send(formData);
        });
    };
    RegistrarComponent.prototype.getRefeicao = function () {
        this.refeicao;
    };
    RegistrarComponent.prototype.ngOnInit = function () {
        this.getRefeicao();
        this.getRefeicoes();
        console.log(this.list);
    };
    RegistrarComponent.prototype.getRefeicoes = function () {
        var _this = this;
        this._refeicaoService.getRefeicoes()
            .subscribe(function (refeicoes) { return _this.list = refeicoes; }, function (error) { return _this.errorMessage = error; });
    };
    RegistrarComponent.prototype.registrar = function () {
        var _this = this;
        this._refeicaoService.addRefeicao(this.refeicao)
            .subscribe(function (data) { return _this.populaRefeicoes(data._body); }, function (error) { return _this.errorMessage = error; });
    };
    RegistrarComponent.prototype.populaRefeicoes = function (input) {
        this.list = JSON.parse(input);
        //this.refeicao = JSON.parse(input);
    };
    RegistrarComponent = __decorate([
        core_1.Component({
            selector: 'registrar-comp',
            templateUrl: 'app/templates/registrar.html',
            providers: [http_1.HTTP_PROVIDERS, refeicao_service_1.RefeicaoService],
            directives: []
        })
    ], RegistrarComponent);
    return RegistrarComponent;
})();
exports.RegistrarComponent = RegistrarComponent;
//# sourceMappingURL=registrar.component.js.map