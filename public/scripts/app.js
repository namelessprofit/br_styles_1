angular
  .module('brstyles', ['ngRoute'])
  .config(config)

config.$inject = ['$routeProvider', '$locationProvider'];

function config($routeProvider, $locationProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'templates/appointment',
            controllerAs: 'stylistsApptIndexCtrl',
            controller: 'StylistsAppointmentsIndexController'
        })
        .when('/stylists/:id', {
            templateUrl: '/templates/stylists-show',
            controllerAs: 'stylistsShowCtrl',
            controller: 'StylistsShowController'
        })
        .when('/admin', {
            templateUrl: '/templates/admin',
            controllerAs: 'stylistsIndexCtrl',
            controller: 'StylistsIndexController'
        })
    $locationProvider.html5Mode({
        enabled: true,
        requireBase: false
    });
}
