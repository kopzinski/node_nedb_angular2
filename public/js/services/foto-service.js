angular.module('FotoService', ['ngResource'])
    .factory('FotoService', function($resource) {

        var service = $resource('/v1/fotos/:fotoId', null, {
            'update' : { 
                method: 'PUT'
            },
            'buscaPorGrupo' : {
                method: 'GET',
                url : '/v1/fotos/grupo/:grupoId',
                isArray: true
            }
        });

        return service;
    });