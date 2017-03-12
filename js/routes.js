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
    .when("/api/v1", {
      title: "API",
      templateUrl: "views/api/v1/index.html",
      controller: "api"
    })
    .when("/api/v1/introduction", {
      title: "Introduction",
      templateUrl: "views/api/v1/introduction.html",
      controller: "api"
    })
    .when("/api/v1/all", {
      title: "All",
      templateUrl: "views/api/v1/all.html",
      controller: "api"
    })
    .when("/api/v1/ace", {
      title: "ACE",
      templateUrl: "views/api/v1/ace.html",
      controller: "api"
    })
    .when("/api/v1/archive", {
      title: "Archives",
      templateUrl: "views/api/v1/archive.html",
      controller: "api"
    })
    .when("/api/v1/embed", {
      title: "Embed",
      templateUrl: "views/api/v1/embed.html",
      controller: "api"
    })
    .when("/api/v1/images", {
      title: "Images",
      templateUrl: "views/api/v1/images.html",
      controller: "api"
    })
    .when("/api/v1/locations", {
      title: "Locations",
      templateUrl: "views/api/v1/locations.html",
      controller: "api"
    })
    .when("/api/v1/weather", {
      title: "Weather",
      templateUrl: "views/api/v1/weather.html",
      controller: "api"
    })
    .when("/api/v1/usage", {
      title: "Usage",
      templateUrl: "views/api/v1/usage.html",
      controller: "api"
    })
    .when("/sensor", {
      title: "Sensor Network",
      templateUrl: "views/sensor/index.html",
      controller: "sensor"
    })
    .when("/sensor/introduction", {
      title: "Sensor Network Introduction",
      templateUrl: "views/sensor/introduction.html",
      controller: "sensor"
    })
    .when("/sensor/weathercam", {
      title: "Weathercam",
      templateUrl: "views/sensor/weathercam.html",
      controller: "sensor"
    })
    .when("/sensor/images", {
      title: "images",
      templateUrl: "views/sensor/images.html",
      controller: "sensor"
    })
    .when("/privacy", {
      title: "Privacy",
      templateUrl: "views/privacy.html",
      controller: "main"
    })
    .otherwise({
      redirectTo: "/"
    });
}])
