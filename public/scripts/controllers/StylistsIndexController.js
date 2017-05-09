angular
  .module('br-styles', [])
  .controller('StylistsIndexController', StylistsIndexController);

StylistsIndexController.$inject = ['$http'];
function StylistsIndexController($http) {
    //TODO: Move these variable declarations to the top of your code block
    var vm = this;
    vmStylist = {};
    $http({
        method: 'GET',
        url: 'api/stylists'
    }).then(successCallback, errorCallback);

    function successCallback(response) {
        console.log(response.data);
        vm.stylists = response.data;
    }

    function errorCallback(response) {
        console.log('There was an error getting the data', response);
    }
    // Posting data from html form
    vm.createStylist = function() {
        console.log("Clicked create stylist");
        $http({
            method: 'POST',
            url: 'api/stylists',
            data: vm.newStylist
        }).then(
            // TODO: decide your coding convention on calling or defining functions in the then method
            // NOTE: you might want to name your functions differently
            function successCallback(response) {
                console.log("congrats!");
                vm.stylists.push(response.data);
            },
            function errorCallback(response) {
                console.log('There was an error posting the data', response);
            });
    }
    vm.deleteStylist = function(stylist) {
        $http({
            method: 'DELETE',
            url: '/api/stylists/' + stylist._id
        }).then(function successCallback(json) {
            var index = vm.stylists.indexOf(stylist);
            console.log("index is: " + index);
            vm.stylists.splice(index, 1)
        }, function errorCallback(response) {
            console.log('There was an error deleting the data', response);
        });
    }
    vm.editStylist = function(stylist) {
        console.log("Clicked edit stylist");
        $http({
            method: 'PUT',
            url: '/api/stylists/' + stylist._id,
            data: stylist
        }).then(
            function successCallback(response) {
                console.log("congrats!");
            },
            function errorCallback(response) {
                console.log('There was an error posting the data', response);
            });
    }
}
