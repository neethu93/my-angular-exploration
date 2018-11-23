
app.directive("w3TestDirective", function() {
    return {
    restrict: 'E',
    scope: {
      info: '='
    },
    templateUrl: 'js/directives/appContent.html'
  };
});
