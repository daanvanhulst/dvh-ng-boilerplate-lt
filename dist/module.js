/// <reference path="../typings/tsd.d.ts" />
/**
 * @ngdoc overview
 * @name Module
 */
var Module;
(function (Module) {
    /**
     * @ngdoc controller
     * @name Module.ModuleController:ModuleController
     */
    var ModuleController = (function () {
        function ModuleController($scope) {
            this.$scope = $scope;
            var henk = "Daan";
            console.log(henk);
            console.log($scope);
        }
        return ModuleController;
    })();
    Module.ModuleController = ModuleController;
})(Module || (Module = {}));
angular.module("dvhModule", [
]).controller("ModuleController", ["$scope", function ($scope) { return new Module.ModuleController($scope); }]);

//# sourceMappingURL=module.js.map