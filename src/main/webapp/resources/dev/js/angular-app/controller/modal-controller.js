AngularApp.controller('modalController', ['$scope', 'close', 'modalService', function ($scope, close, modalService) {
    //modalView using this options to bind the fields
    $scope.modalOptions = modalService.getOptions();
    $scope.close = function (modalData) {
        close(modalData, 500); // close, but give 500ms for bootstrap to animate
    };
}]);
