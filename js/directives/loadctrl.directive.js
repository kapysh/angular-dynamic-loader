angular.module('portal.directives')
// should be like load-ctrl="path/to/ctrl.js and have a use-ctrl="ctrl-name"
.directive('loadCtrl', ['$compile', 'CONTROLLER_PATHS', function($compile, CONTROLLER_PATHS) {
  return {
    restrict: 'A',
    terminal: true,
    priority: 100000,
    link: function(scope, element, attrs, ctrl) {
      var controllerName = attrs.loadCtrl;
      var controllerPath = CONTROLLER_PATHS[controllerName]
      
      if(controllerPath) {
        // append script tag to head
        var script = document.createElement( 'script' );
        script.type = 'application/javascript';
        script.src = controllerPath;
        $('head').append(script);

        // add ng-controller
        element.attr('ng-controller', controllerName);
        element.removeAttr('load-ctrl');
        $compile(element)(scope);
      }
      else {
        console.log('Controller path for '+controllerName+' not found!');
      }
    }
  };
}]);