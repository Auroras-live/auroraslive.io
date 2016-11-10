angular.module('app', ['ngRoute', 'app.controllers', 'app.routes'])

.run(function($rootScope, $http, $q) {
  $rootScope.timezone = new Date().getTimezoneOffset()
  $rootScope.resultsData = []

  $rootScope.getResults = function(url, id, xml) {
    $rootScope.resultsData[id] = "Running, please wait.."
    $http.get("https://api.auroras.live/v1/" + url).then(function(data) {
      if(typeof xml === "undefined") {
        $rootScope.resultsData[id] = JSON.stringify(data.data,null,2)
      } else {
        $rootScope.resultsData[id] = data.data
      }
    })
  }

})
