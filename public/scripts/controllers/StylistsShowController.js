angular
    .module('brstyles')
    .controller('StylistsShowController', StylistsShowController);

StylistsShowController.$inject = ['$http', '$routeParams'];

function StylistsShowController($http, $routeParams) {
    var vm = this;
    console.log($routeParams.id);

    vm.Data = function() {
        $http({
            method: 'GET',
            url: '/api/stylists/' + $routeParams.id
        }).then(function successCallback(json) {
            console.log(json.data);
            vm.appointments = json.data.appointments;
            vm.tempData = json.data;
            console.log(vm.appointments);
            vm.appointment = json.data;
        });
    }

    vm.editAppointment = function(appointment) {
        if (appointment.newName === appointment.name) {
            console.log('Thats the same name~')
        } else {
            appointment.name = appointment.newName;
            delete appointment.newName;
            $http({
                method: 'PUT',
                url: '/api/stylists/' + $routeParams.id + '/appointments/' + appointment._id,
                data: appointment
            }).then(
                function successCallback(response) {
                    console.log("congrats!", response);
                },
                function errorCallback(response) {
                    console.log('There was an error posting the data', response);
                });
        }
    }

    vm.deleteAppointment = function(appointment) {
        console.log(appointment)
        $http({
            method: 'DELETE',
            url: '/api/stylists/' + $routeParams.id + '/appointments/' + appointment._id,
        }).then(function successCallback(json) {
            console.log('Deleted!')
        }, function errorCallback(response) {
            console.log('There was an error deleting the data', response);
        });
    }
}
