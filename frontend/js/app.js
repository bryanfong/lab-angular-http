angular.module('criminalApp', [])
.controller('criminalCtrl', ['$scope', '$http', function ($scope, $http){

  $scope.criminals = [];
  $scope.newCriminal = {};
  $scope.addCriminal = addCriminal;
  $scope.updateCriminal = updateCriminal;

  getCriminals();

  function getCriminals(){
    $http
      .get('http://localhost:3000/criminals')
      .success(function(data){
        $scope.criminals = data.criminals;
      });
  }

  function addCriminal(){
    $http
      .post('http://localhost:3000/criminals', $scope.newCriminal)
      .success(function(){
        getCriminals();
      });
    $scope.newCriminal ={}
  }



}])