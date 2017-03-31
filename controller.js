angular.module('weatherApp').controller('mainCtrl', function($scope, weatherService){

  //$scope.test = 'bOOya!! It works!!';

  $scope.getWeather = function(city){
    console.log('ctrl function fired');
    return weatherService.getWeather(city).then(function(response){
      console.log('made it back into crtl');
      $scope.weather = response;
      $scope.temp = (response.main.temp * (9/5) - 459.67).toFixed(1) + '℉';
    });
  }

});
