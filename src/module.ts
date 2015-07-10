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
        }
    }
}

angular.module("module", [
    "subModule"
])

.controller("ModuleController", ["$scope",
($scope) => new Module.ModuleController($scope)
])
;
