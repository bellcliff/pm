(function() {
    'use strict';

    angular.module('app', [])
        .controller('c1', ['$scope', '$http', c1]);

    function c1($scope, $http) {
        $scope.getC1 = function() {
            return $http.get('/api/c1').then(function(data) {
                $scope.c1s = data.data;
            });
        }

        $scope.addC1 = function(c1) {
            $http.post('/api/c1', c1).then(function(data) {
                $scope.c1s.push(data.data);
            });
        }
    }
})();
