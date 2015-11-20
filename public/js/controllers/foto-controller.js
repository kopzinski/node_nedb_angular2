angular.module('alurapic')
    .controller('FotoController', function($scope, $http) {

        $scope.foto = {};
        $scope.mensagem = '';

        $scope.submeter = function() {

            if ($scope.formulario.$valid) {

                $http.post('/v1/fotos', $scope.foto)
                .success(function() {
                    $scope.foto = {};
                    $scope.mensagem = 'Foto cadastrada com sucesso';
                })
                .error(function(erro) {
                    console.log(erro);
                    $scope.mensagem = 'Não foi possível cadastrar a foto';
                })
            }
        };

	    $scope.remover = function(foto) {
	    	console.loe("aaaa");

	        $http.delete('/v1/fotos/' + foto._id)
	        .success(function() {
	            $scope.mensagem = 'Foto ' + foto.titulo + ' removida com sucesso!';

	        })
	        .error(function(erro) {
	            console.log(erro);
	            $scope.mensagem = 'Não foi possível apagar a foto ' + foto.titulo;
	        });
	    };


    });