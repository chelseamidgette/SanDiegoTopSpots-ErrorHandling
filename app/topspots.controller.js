(function() {
    'use strict';

    angular
        .module('myApp', ['ngAnimate', 'toastr'])
        .controller('TopSpotsController', TopSpotsController);

    TopSpotsController.$inject = ['TopSpotsFactory', 'toastr'];

    /* @ngInject */
    function TopSpotsController(TopSpotsFactory, toastr) {
        var vm = this;
        vm.title = 'TopSpotsController';

        activate();

        ////////////////

        function activate() {

            getTopSpots();

        }

        function getTopSpots() {

            TopSpotsFactory.getTopSpots().then(
                function(response) {

                    vm.topspots = response.data;
                    console.log('We have topspots!!');

                    vm.addrow = function() {
                        vm.topspots.push({ 'name': vm.name, 'description': vm.description, 'location': vm.location });
                        vm.name = '';
                        vm.description = '';
                        vm.location = '';
                    };
                },
                function(error) {
                    if (error.data) {
                        toastr.error('There was a problem: ' + error.data);
                    } else {
                        toastr.info('no data found :(');
                    }
                }
            )
        }
    }
})();
