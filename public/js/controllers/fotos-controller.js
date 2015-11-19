angular.module('alurapic').controller('FotosController', function($scope, $http) {

    $scope.fotos = [];
    $scope.filtro = '';

    $http.get('/v1/fotos')
    .success(function(retorno) {
        $scope.fotos = retorno; // não precisa fazer retorno.data
    })
    .error(function(erro) {
        console.log("Kop! FotosController Erro:");
        console.log(erro);
    });

});