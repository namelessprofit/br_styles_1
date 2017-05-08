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
      bio:'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      location: 'Grant Ave, San Francisco'
    },
    {
      name: 'Tom Ford',
      bio:'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      location: 'Grant Ave, San Francisco'
    },
    {
      name: 'Hugo Boss',
      bio:'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      location: 'Grant Ave, San Francisco'
    }
  ];
vm.hello = "jean";
  }
