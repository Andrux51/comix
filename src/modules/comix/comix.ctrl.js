comixApp.controller('ComixController', ['$scope', 'DataService', function($scope, DataService) {
    $scope.initialize = function() {
        $scope.characters = [];

        $scope.character = {};
    };

    $scope.getCharacterByName = function(name) {
        if(!name) return false;

        DataService.getCharacterByName(name)
            .then(function(response) {
                $scope.characters = response.data;
            });
    };
}]);
