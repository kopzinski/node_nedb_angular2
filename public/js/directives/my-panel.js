angular.module('Panel', [])
.directive('myPanel', function() {

  var directive = {}

  directive.restrict = 'EA';

  directive.scope = {
    title: '@'
  };

  directive.transclude = true;

  directive.templateUrl = 'js/directives/my-panel.html';

  return directive;
});