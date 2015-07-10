/// <reference path="../../typings/tsd.d.ts" />
/**
 * @ngdoc overview
 * @name Module.SubModule
 */
var SubModule;
(function (SubModule) {
    /**
     * @ngdoc controller
     * @name Module.SubModule.SubModuleController:SubModuleController
     */
    var SubModuleController = (function () {
        function SubModuleController($scope) {
            this.$scope = $scope;
        }
        return SubModuleController;
    })();
    SubModule.SubModuleController = SubModuleController;
})(SubModule || (SubModule = {}));
angular.module("dvhModule", [
]).controller("SubModuleController", ["$scope", function ($scope) { return new SubModule.SubModuleController($scope); }]);

//# sourceMappingURL=../subModule/subModule.js.map