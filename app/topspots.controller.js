(function() {
    'use strict';

    angular
        .module('myApp')
        .controller('TopSpotsController', TopSpotsController);

    TopSpotsController.$inject = ['TopSpotsFactory'];

    /* @ngInject */
    function TopSpotsController(TopSpotsFactory) {
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

                    $vm.addrow = function() {
                        $vm.topspots.push({'name':$scope.name, 'description':$scope.description, 'location':$scope.location});
                        $vm.name = '';
                        $vm.description = '';
                        $vm.location = '';
    };
        			}
        		)
        	}
        }
})();