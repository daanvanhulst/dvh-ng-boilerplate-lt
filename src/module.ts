/// <reference path="../typings/tsd.d.ts" />

/**
 * @ngdoc overview
 * @name Module
 */
module Module {
    /**
     * @ngdoc controller
     * @name Module.ModuleController:ModuleController
     */
    export class ModuleController {
        constructor(private $scope) {
            var henk : string = "Daan";
            console.log(henk);
            console.log($scope);
        }
    }
}

angular.module("dvhModule", [
])

.controller("ModuleController", ["$scope",
($scope) => new Module.ModuleController($scope)
])
;
