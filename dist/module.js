/// <reference path="../typings/tsd.d.ts" />
/**
 * @ngdoc controller
 * @name dvhulstcom.ModuleController:AppController
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
/**
 * @ngdoc overview
 * @name dvhulstcom
 */
angular.module("dvhModule", [
]).controller("ModuleController", ["$scope", function ($scope) { return new ModuleController($scope); }]);

//# sourceMappingURL=module.js.map