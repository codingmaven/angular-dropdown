/**
 * Created by dreamsoft on 1/24/17.
 */

var app = angular.module("demo", []);

app.run(function($rootScope) {
  angular.element(document).on("click", function(e) {
    $rootScope.$broadcast("documentClicked", angular.element(e.target));
  });
});

