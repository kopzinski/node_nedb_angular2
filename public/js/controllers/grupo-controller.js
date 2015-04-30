angular.module('projeto')
    .controller('GrupoController', function($scope) {

        $scope.grupos = [

            {
                _id: 1, 
                nome: 'esportes'
            },
            {
                _id: 2, 
                nome: 'lugares'
            },
            {
                _id: 3, 
                nome: 'animais'
            }

        ];
    });