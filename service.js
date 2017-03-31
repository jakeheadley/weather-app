angular.module('weatherApp').service('weatherService', function($http){

  // $http = 'http://ip-api.com/json';
  var baseUrl2 = 'http://api.openweathermap.org/data/2.5/weather?q=';
  var apiKey = 'c54910d1ae4d8e9e7e5bbda457d4ba22';

  this.getWeather = function(city){
    console.log('at service');
     return $http.get(baseUrl2+city+"&appid="+apiKey).then(function(response){
       console.log('got responce');
       console.log(response.data);
       return response.data;
     })
  };

});
