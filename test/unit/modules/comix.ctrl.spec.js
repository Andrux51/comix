describe('Controller: ComixController', function() {
    var ctrl, $scope, $q, DataService;

    beforeEach(function() {
        module('comixApp');

        inject(function($controller, $injector) {
            $scope = $injector.get('$rootScope').$new();
            $q = $injector.get('$q');
            DataService = $injector.get('DataService');

            ctrl = $controller('ComixController', { $scope: $scope, DataService: DataService });
        });

        DataService.get = jasmine.createSpy('get').and.returnValue($q.when({}));

        this.characters = angular.copy(window.jsonMocks['characters']);

        var deferHulk = $q.defer();
        deferHulk.resolve({data: this.characters});
        DataService.getCharacterByName = jasmine.createSpy('getCharacterByName').and.returnValue(deferHulk.promise);
    });

    describe('Initialize', function() {
        it('should call a function to initialize', function() {
            spyOn($scope, 'initialize');

            $scope.initialize();

            expect($scope.initialize).toHaveBeenCalled();
        });

        it('should make an array for the characters', function() {
            $scope.initialize();

            expect(Array.isArray($scope.characters)).toBe(true);
        });

        it('should make a character object', function() {
            $scope.initialize();

            expect($scope.character).toBeDefined();
        });
    });

    describe('Get Character By Name', function() {
        it('should call a function to get character by name', function() {
            spyOn($scope, 'getCharacterByName');

            $scope.getCharacterByName();

            expect($scope.getCharacterByName).toHaveBeenCalled();
        });

        it('should fail if no character name is passed', function() {
            expect($scope.getCharacterByName()).toBe(false);
        });

        it('should call the dataservice to get character by name', function() {
            $scope.getCharacterByName('name');

            expect(DataService.getCharacterByName).toHaveBeenCalled();
        });

        it('should get the data response back', function() {
            $scope.getCharacterByName('hulk');
            $scope.$digest();

            expect($scope.characters).toEqual(this.characters);
        });
    });
});
