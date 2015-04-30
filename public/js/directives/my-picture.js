angular.module('Picture', [])
    .directive('myPicture', function() {
        var directive = {};

        directive.restrict = "AE";
        directive.scope = {
            url : '@'
        };
        
        directive.template = '<img class="img-responsive center-block" ng-src="{{url}}">'
        return directive;
    });