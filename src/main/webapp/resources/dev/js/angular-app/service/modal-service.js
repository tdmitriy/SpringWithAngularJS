AngularApp.service('modalService', ['ModalService', function (ModalService) {
    var modalDefaultOptions = {
        controller: 'modalController',
        templateUrl: 'users/view/modal',

        closeButtonText: 'Cancel',
        actionButtonText: 'Delete',
        headerText: 'Confirmation',
        bodyText: 'Perform this action?'

    };

    this.show = function (customModalOptions) {
        if (typeof customModalOptions !== 'undefined') angular.extend(modalDefaultOptions, customModalOptions);
        return ModalService.showModal(modalDefaultOptions);
    };

    this.getOptions = function () {
        return modalDefaultOptions;
    };
}]);
