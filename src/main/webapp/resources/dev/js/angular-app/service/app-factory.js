AngularApp.factory('appFactory',
    ['modalService', 'userService', 'errorService', 'Notification',
        function (modalService, userService, errorService, Notification) {
            return {
                getUserService: function () {
                    return userService;
                },
                getModalService: function () {
                    return modalService;
                },
                getErrorService: function () {
                    return errorService;
                },
                getNotificationService: function () {
                    return Notification;
                }
            };
        }]);