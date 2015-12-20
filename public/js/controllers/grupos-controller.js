angular.module('alurapic').controller('GruposController', function($scope, $http){
	$scope.grupos = [];


	$http.get('v1/grupos')
	.success(function(grupos){
		$scope.grupos = grupos;
	})
	.error(function(error){
		console.log(error);
	});

});