angular.module('projeto')
    .controller('FotoController', function($scope, $routeParams, $location, FotoService) {

        $scope.foto = {};
        $scope.mensagem = '';
    
        if($routeParams.fotoId) {
            FotoService.get({fotoId: $routeParams.fotoId}, function(retorno) {
                 $scope.foto = retorno;
            });
        }

        $scope.submeter = function() {
           if($scope.formulario.$valid) {
                if(!$routeParams.fotoId) {
                    
                    FotoService.save($scope.foto, function(_id) {
                        $scope.foto = {};
                        $scope.mensagem = 'Salvo com sucesso';
                    }, function(status) {
                        console.log(status);
                        $scope.mensagem = 'Não foi possível salvar';
                    });

                } else {
                    FotoService.update({fotoId : $scope.foto._id}, $scope.foto, function(_id) {
                        $scope.foto = {};
                        $scope.mensagem = 'Alterado com sucesso';                        
                    }, function(status) {
                        console.log(status);
                        $scope.mensagem = 'Não foi possível alterar';
                    });                    
                }
           } 
        };
    });