describe('Controller: LoginController', function() {
    var ctrl, $scope, $location;

    // load angular.module and the desired controller and its dependencies
    beforeEach(function() {
        module('comixApp');

        inject(function ($controller, $injector) {
            $scope = $injector.get('$rootScope').$new();
            $location = $injector.get('$location');

            ctrl = $controller('LoginController', { $scope: $scope });
        });
    });

    describe('Initialize', function() {
        it('should call a function to initialize some scope variables', function() {
            spyOn($scope,'init');

            $scope.init();

            expect($scope.init).toHaveBeenCalled();
        });

        it('should initialize a user object', function() {
            $scope.init();

            expect($scope.user).toBeDefined();
            expect(typeof($scope.user)).toBe('object');
            expect(Object.keys($scope.user)).toEqual(['name', 'password']);
        });
    });

    describe('Validate User', function() {
        beforeEach(function() {
            $scope.init();
        });

        it('should call a function to validate the user', function() {
            spyOn($scope, 'validateUser');

            $scope.validateUser();

            expect($scope.validateUser).toHaveBeenCalled();
        });

        it('should fail if a valid user is not passed in', function() {
            expect($scope.validateUser()).toBe(false);
            expect($scope.validateUser('hello')).toBe(false);
        });

        describe('condition: username is not valid', function() {
            beforeEach(function() {
                $scope.user.name = '12';
            });

            it('should invalidate the user', function() {
                $scope.user.valid = true;
                $scope.validateUser($scope.user);

                expect($scope.user.valid).toBe(false);
            });
        });

        describe('condition: password is not valid', function() {
            beforeEach(function() {
                $scope.user.password = 'pass';
            });

            it('should invalidate the user', function() {
                $scope.user.valid = true;
                $scope.validateUser($scope.user);

                expect($scope.user.valid).toBe(false);
            });
        });

        describe('condition: username and password are valid', function() {
            beforeEach(function() {
                $scope.user.name = 'happy';
                $scope.user.password = 'birthday';
            });

            it('should validate the user', function() {
                $scope.user.valid = false;
                $scope.validateUser($scope.user);

                expect($scope.user.valid).toBe(true);
            });
        });

        describe('condition: user has passed validation', function() {
            beforeEach(function() {
                $scope.user = { name: 'happy', password: 'birthday', valid: true };
            });

            it('should change the view', function() {
                $scope.validateUser($scope.user);

                expect($location.path()).toBe('/comix');
            });
        })
    });
});
