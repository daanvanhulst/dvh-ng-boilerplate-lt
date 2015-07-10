/// <reference path="../../typings/tsd.d.ts" />

/**
 * @ngdoc overview
 * @name Module.SubModule
 */
module SubModule {
    /**
     * @ngdoc controller
     * @name Module.SubModule.SubModuleController:SubModuleController
     */
    export class SubModuleController {
        constructor(private $scope) {

        }
    }
}

angular.module("subModule", [
])

.controller("SubModuleController", ["$scope",
($scope) =>
    new SubModule.SubModuleController($scope)
])
;
