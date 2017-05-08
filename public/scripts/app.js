angular
  .module('br-styles', [])
  .controller('StylistsIndexController', StylistsIndexController);

  function StylistsIndexController () {
    var vm = this;
    vm.newStylist = {};

    vm.newStylist = {
        name: 'Kaya Fortune',
        location: 'Grant Ave, San Francisco'
    };

  vm.stylists = [
    {
      name: 'Archy Posada',
      location: 'Grant Ave, San Francisco'
    },
    {
      name: 'Tom Ford',
      location: 'Grant Ave, San Francisco'
    },
    {
      name: 'Hugo Boss',
      location: 'Grant Ave, San Francisco'
    }
  ];
vm.hello = "jean";
  }
