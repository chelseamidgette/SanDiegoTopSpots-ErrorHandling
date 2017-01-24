(function() {
    'use strict';

    angular
        .module('myApp')
        .factory('TopSpotsFactory', TopSpotsFactory);

    TopSpotsFactory.$inject = ['$http', '$q'];

    /* @ngInject */
    function TopSpotsFactory($http, $q) {
        var service = {
            getTopSpots: getTopSpots
        };
        return service;

        ////////////////

        function getTopSpots() {

        	var defer = $q.defer();

        	$http({
        		method: 'GET',
        		url: '../locations.json'
        	}).then(function(response) {

        		defer.resolve(response);
        	});

        	return defer.promise;
        }
    }
})();