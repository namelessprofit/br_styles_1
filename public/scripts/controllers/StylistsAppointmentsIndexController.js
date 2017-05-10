angular
  .module('brstyles')
  .controller('StylistsAppointmentsIndexController', StylistsAppointmentsIndexController);


StylistsAppointmentsIndexController.$inject = ['$http', '$scope'];
function StylistsAppointmentsIndexController($http, $scope) {

  var vm = this;
  vm.appointment = {};
  $http({
    method: 'GET',
    url: '/api/appointments'
  }).then(successCallback, errorCallback);

  function successCallback(response) {
    console.log(response.data);
    vm.stylists = response.data;
  }

  function errorCallback(response) {
    console.log('There was an error getting the data', response);
  }
  // Posting data from html form
  vm.createAppointment = function() {
    console.log("Clicked create stylist");
    $http({
      method: 'POST',
      url: 'api/appointments',
      data: vm.newStylist
    }).then(
      function successCallback(response) {
        console.log("congrats!");
        vm.appointments.push(response.data);
      },
      function errorCallback(response) {
        console.log('There was an error posting the data', response);
      });
  }
  vm.deleteAppointment = function(appointment) {
    $http({
      method: 'DELETE',
      url: '/api/appointments/' + stylist._id
    }).then(function successCallback(json) {
      var index = vm.appointments.indexOf(appointment);
      console.log("index is: " + index);
      vm.appointments.splice(index, 1)
    }, function errorCallback(response) {
      console.log('There was an error deleting the data', response);
    });
  }
  vm.editAppointment = function(appointment) {
    console.log("Clicked edit appointment", appointment);
    $http({
      method: 'PUT',
      url: '/api/appointments/' + appointment._id,
      data: appointment
    }).then(
      function successCallback(response) {
        console.log("congrats!");
      },
      function errorCallback(response) {
        console.log('There was an error posting the data', response);
      });
  }
}
