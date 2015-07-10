/// <reference path="../typings/tsd.d.ts" />
/// <reference path="../typings/app.d.ts" />

describe( "Module", function() {
    var ModuleController;
    var $scope;

    beforeEach( module( "module" ) );

    beforeEach( inject( function( $controller, $rootScope ) {
        $scope = $rootScope.$new();
		ModuleController = new Module.ModuleController($scope);
 
    }));

    it( "controller should not be null", inject( function() {
        expect(ModuleController).not.toBeNull();
    })); 
});