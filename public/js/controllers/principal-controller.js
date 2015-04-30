angular.module('projeto')
    .controller('PrincipalController', function($scope, $http, $cookieStore, FotoService) {
    
        $scope.filtro = '';
        $scope.mensagem = '';
        var grupoId = $cookieStore.get('grupoId') || 2;
        $scope.grupo = {
            _id : grupoId
        };
    
        $scope.listarPorGrupo = function(grupo) {
            $scope.filtro = '';
            $cookieStore.put('grupoId', grupo._id);
            FotoService.buscaPorGrupo({grupoId: grupo._id},function(retorno) {
                $scope.fotos = retorno;
            }, function(status) {
                console.log(status);
                $scope.mensagem  = 'Não foi possível buscar fotos';                
            });
        };

        $scope.listarPorGrupo($scope.grupo);

        $scope.remover = function(foto) {
            FotoService.delete({fotoId: foto._id}, function() {
                $scope.mensagem = 'Foto apagada com sucesso';
                $scope.listarPorGrupo($scope.grupo);
            }, function(status) {
                console.log(status);
                $scope.mensagem = 'Não foi possível apagar a foto';
            });
        };        
    });