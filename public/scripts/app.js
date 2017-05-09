angular
  .module('brstyles', ['ngRoute'])
  .config(config)

config.$inject = ['$routeProvider', '$locationProvider'];

function config($routeProvider, $locationProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'templates/stylists',
            controllerAs: 'stylistsIndexCtrl',
            controller: 'StylistsIndexController'
        })
        .when('/stylists/:id', {
            templateUrl: '/templates/stylists-show',
            controllerAs: 'stylistsShowCtrl',
            controller: 'StylistsShowController'
        })
    $locationProvider.html5Mode({
        enabled: true,
        requireBase: false
    });
}
