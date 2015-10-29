comixApp.controller('LoginController', ['$scope', '$location', function($scope, $location) {
    $scope.init = function() {
        $scope.user = {
            name: '',
            password: ''
        };
    };

    $scope.validateUser = function(user) {
        if(!user || typeof(user) !== 'object') return false;

        if(user.name.length < 3) {
            user.valid = false;
        } else if(user.password.length < 6) {
            user.valid = false;
        } else {
            user.valid = true;
        }

        if(user.valid) $location.path('/comix');
    };
}]);
