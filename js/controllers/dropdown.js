/**
 * Created by dreamsoft on 1/24/17.
 */

app.controller("dropdownDemo", function($scope) {
  $scope.colours = [{
    name: "Red",
    hex: "#F21B1B"
  }, {
    name: "Blue",
    hex: "#1B66F2"
  }, {
    name: "Green",
    hex: "#07BA16"
  }];
  $scope.colour = "";
});
