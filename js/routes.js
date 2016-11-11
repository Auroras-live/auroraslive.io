angular.module("app.routes", [])

.config(["$routeProvider",  "$locationProvider", function($routeProvider, $locationProvider) {
  $routeProvider
    .when("/", {
      title: "Home",
      templateUrl: "views/main.html",
      controller: "main"
    })
    .when("/api", {
      title: "API",
      templateUrl: "views/api/index.html",
      controller: "api"
    })
    .when("/api/introduction", {
      title: "API",
      templateUrl: "views/api/introduction.html",
      controller: "api"
    })
    .when("/api/all", {
      title: "API",
      templateUrl: "views/api/all.html",
      controller: "api"
    })
    .when("/api/ace", {
      title: "ACE",
      templateUrl: "views/api/ace.html",
      controller: "api"
    })
    .when("/api/archive", {
      title: "Archives",
      templateUrl: "views/api/archive.html",
      controller: "api"
    })
    .when("/api/embed", {
      title: "Embed",
      templateUrl: "views/api/embed.html",
      controller: "api"
    })
    .when("/api/images", {
      title: "Images",
      templateUrl: "views/api/images.html",
      controller: "api"
    })
    .when("/api/locations", {
      title: "Locations",
      templateUrl: "views/api/locations.html",
      controller: "api"
    })
    .when("/api/weather", {
      title: "Weather",
      templateUrl: "views/api/weather.html",
      controller: "api"
    })
    .when("/api/usage", {
      title: "Usage",
      templateUrl: "views/api/usage.html",
      controller: "api"
    })
    .when("/sensor", {
      title: "Sensor Network",
      templateUrl: "views/sensor/index.html",
      controller: "sensor"
    })
    .otherwise({
      redirectTo: "/"
    });
}])
