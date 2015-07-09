/// <reference path="../typings/tsd.d.ts" />

/**
 * @ngdoc controller
 * @name dvhulstcom.ModuleController:AppController
 */
class ModuleController {
    constructor(private $scope) {
		var henk : string = "Daan";
		console.log(henk);
		console.log($scope);
    }
}

/**
 * @ngdoc overview
 * @name dvhulstcom
 */
angular.module("dvhModule", [
])

.controller("ModuleController", ["$scope",
($scope) =>
    new ModuleController($scope)
])
;
