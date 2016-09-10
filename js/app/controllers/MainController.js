function MainController($scope){
  $scope.name = "JASON KWONG"
  $scope.email = "jason@kwong.com"
}

angular
  .module('app')
  .controller('MainController', MainController)