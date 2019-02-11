// create the module and name it configApp
var configApp = angular.module('configApp', ['ngRoute']);
// configure our routes
configApp.config(function($routeProvider) {
    $routeProvider
        // route for the dashboard page
        .when('/', {
            templateUrl: 'pages/console.html',
            controller: 'mainController'
        })
        // route for the package view page
        .when('/screen', {
            templateUrl: 'pages/game.html',
            controller: 'gameController'
        })
        .when('/host', {
            templateUrl: 'pages/host.html',
            controller: 'hostController'
        })
        
});

