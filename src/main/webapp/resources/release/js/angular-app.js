'use strict';
var AngularApp = angular.module('AngularApp',
    [
        'ngRoute',
        'ngAnimate',
        'angular-loading-bar',
        'angularModalService',
        'ui-notification',
        'ngMessages'
    ]);

/* Route Provider */
AngularApp.config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/', {
        templateUrl: '/home',
        controller: 'indexController'
    });

    $routeProvider.when('/users/show', {
        templateUrl: 'users/view/show',
        controller: 'userController'
    });
    $routeProvider.when('/users/management', {
        templateUrl: 'users/view/management',
        controller: 'userController'
    });
    $routeProvider.when('/404', {
        templateUrl: '/404',
        controller: 'indexController'
    });
    $routeProvider.otherwise({redirectTo: '/404'});
}]);
;
AngularApp.controller('indexController',['$scope', function ($scope) {
    console.log("in index controller.");
}]);;
AngularApp.controller('modalController', ['$scope', 'close', 'modalService', function ($scope, close, modalService) {
    //this options using in modalView to bind the fields
    $scope.modalOptions = modalService.getOptions();
    $scope.close = function (modalData) {
        close(modalData, 500); // close, but give 500ms for bootstrap to animate
    };
}]);;
AngularApp.controller('userController',
    ['$scope', '$filter', 'appFactory',
        function ($scope, $filter, appFactory) {
            var userService = appFactory.getUserService();
            var modalService = appFactory.getModalService();
            var errorService = appFactory.getErrorService();
            var notifyService = appFactory.getNotificationService();

            //models
            $scope.user = {};
            $scope.searchField = {};

            //forms
            $scope.userForm = {};
            $scope.searchForm = {};

            //states
            $scope.searchableState = false;
            $scope.editableState = false;

            //modal, confirm message before delete some data
            $scope.modal = {};


            $scope.getUsersList = function () {
                $scope.resetErrors();
                setSearchableState(false);
                $scope.usersList = [];

                userService.fetchUserList().then(function (response) {
                    $scope.usersList = response;
                });
            };

            $scope.addNewUser = function (user) {
                $scope.resetErrors();

                userService.saveUser(user).then(function () {
                    $scope.getUsersList();
                    notifyService.success(setNotifyMessage('User was added successfully.'));
                }).finally(function () {
                    $scope.resetUserForm();
                });
            };

            $scope.updateUser = function (updatedUser) {
                $scope.resetErrors();

                userService.saveUser(updatedUser).then(function () {
                    setEditableState(false);
                    //update scope model
                    var i, users = $scope.usersList;

                    for (i = 0; i < users.length; i++) {
                        if (users[i].id === updatedUser.id) {
                            users[i] = angular.copy(updatedUser);
                            break;
                        }
                    }
                    notifyService.success(setNotifyMessage('User was updated successfully.'));
                }).finally(function () {
                    $scope.resetUserForm();
                });
            };

            $scope.searchUsers = function (criteria) {
                $scope.resetErrors();
                setSearchableState(true);
                $scope.usersList = [];

                userService.searchUsers(criteria).then(function (response) {
                    $scope.usersList = response;
                });
            };

            $scope.deleteUserById = function (id) {
                $scope.resetErrors();
                $scope.resetUserForm();

                userService.deleteById(id).then(function () {
                    //search user for given id and then remove this user in scope
                    var user = $filter('filter')($scope.usersList, {id: id})[0];
                    var index = $scope.usersList.indexOf(user);
                    $scope.usersList.splice(index, 1);
                    notifyService.success(setNotifyMessage('User was removed successfully.'));
                });
            };

            $scope.deleteAllUsers = function () {
                $scope.resetErrors();
                $scope.resetUserForm();

                userService.deleteAll().then(function () {
                    $scope.usersList = [];
                    notifyService.success(setNotifyMessage('All users was removed successfully.'));
                });
            };

            /* search form */
            $scope.resetSearchForm = function () {
                if ($scope.searchableState) $scope.getUsersList();
                setSearchableState(false);
                $scope.searchField.criteria = '';
                $scope.searchForm.$setPristine();

            };

            var setSearchableState = function (value) {
                $scope.searchableState = value;
            };
            /* end search form */

            /* users form */
            $scope.editUser = function (user) {
                $scope.resetErrors();
                $scope.user = angular.copy(user);
                setEditableState(true);
            };

            $scope.resetUserForm = function () {
                setEditableState(false);

                $scope.userForm.$setPristine();
                $scope.userForm.$setUntouched();
                $scope.user = {};
            };

            $scope.getUsersListLoadedStatus = function () {
                return userService.getUsersListLoadedStatus();
            };

            $scope.getLoadingStatus = function () {
                return userService.getLoadingStatus();
            };

            $scope.getSavingStatus = function () {
                return userService.getSavingStatus();
            };

            $scope.getDeletionStatus = function () {
                return userService.getDeletionStatus();
            };

            var setEditableState = function (value) {
                $scope.editableState = value;
            };

            /* end user edit form */

            /* errors  */
            $scope.error = function () {
                return errorService.isError();
            };

            $scope.errorList = function () {
                return errorService.getErrors();
            };

            $scope.resetErrors = function () {
                errorService.resetErrors();
            };
            /* end errors  */

            /* modal window handler */
            $scope.modal.showConfirm = function (action, data) {
                var options = setModalOptions(action);
                modalService.show(options).then(function (modal) {
                    //it's a bootstrap element
                    modal.element.modal();
                    modal.close.then(function (modalData) {
                        //handle buttons result
                        if (modalData !== 'cancel')
                            performAction(action, data);
                    });
                });
            };

            //actions for modal window
            var ACTIONS = {DELETE_ALL: 'deleteAll', DELETE_BY_ID: 'deleteById'};

            //return modal html template with given options
            var setModalOptions = function (action) {
                var deleteAllOpt = {bodyText: 'Delete all users?'};
                var deleteByIdOpt = {bodyText: 'Delete this user?'};
                var modalOptions = {};
                switch (action) {
                    case ACTIONS.DELETE_ALL:
                        modalOptions = deleteAllOpt;
                        break;
                    case ACTIONS.DELETE_BY_ID:
                        modalOptions = deleteByIdOpt;
                        break;
                }
                return modalOptions;
            };

            var performAction = function (action, data) {
                switch (action) {
                    case ACTIONS.DELETE_ALL:
                        $scope.deleteAllUsers();
                        break;
                    case ACTIONS.DELETE_BY_ID:
                        if (typeof data !== 'undefined')
                            $scope.deleteUserById(data);
                        break;
                    default :
                        console.error("unknown action=", action);
                        break;
                }
            };
            /* end modal window handler */

            /* misc */
            var notifyOptions = {
                delay: 4000,
                positionY: 'top',
                positionX: 'center'
            };

            var setNotifyMessage = function (message) {
                var icon = '<i class="fa fa-fw fa-check-circle"></i>';
                notifyOptions.message = icon + message;
                return notifyOptions;
            };
            /* end misc */

            //get user list during loading page
            $scope.getUsersList();
        }]);;
AngularApp.directive("customDomDirective", function () {
    return {
        restrict: "A",
        link: function () {
            //custom js code for pages
            JqueryCustom.loadScripts();
        }
    }
});

var JqueryCustom = {};

JqueryCustom.misc = function () {
    /* Fade in effect after loading page */
    $(".container-fluid").fadeIn(200);
};

JqueryCustom.loadScripts = function () {
    JqueryCustom.misc();
};;
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
        }]);;
AngularApp.service('errorService', function () {
    var errors = {title: '', messages: null};
    var error = false;

    this.setErrors = function (title, messages) {
        error = true;
        errors.title = title;
        errors.messages = messages;
    };

    this.resetErrors = function () {
        error = false;
    };

    this.getErrors = function () {
        return errors;
    };

    this.isError = function () {
        return error;
    };
});
;
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
;
AngularApp.service('userService', ['$http', '$q', 'errorService', function ($http, $q, errorService) {
    var errors = errorService;
    var result = null;
    //URLS
    var urlFetch = "users/service/getList.json";
    var urlUserSave = "users/service/save";
    var urlUserSearch = "users/service/search/";
    var urlUserDelById = "users/service/delete/";
    var urlUserDelAll = "users/service/deleteAll";

    var usersListLoaded = false;

    var loadingStatus = false;
    var savingStatus = false;
    var deletionStatus = false;

    this.fetchUserList = function () {
        setLoadingStatus(true);
        setUsersListLoaded(false);
        result = $q.defer();
        $http.get(urlFetch).then(function (response) {
            result.resolve(response.data);
            setLoadingStatus(false);
            setUsersListLoaded(true);
        }, function (errorMessages) {
            result.reject(errorMessages);
            errors.setErrors('Could not load users list.', errorMessages.data.errors);
            setLoadingStatus(false);
            setUsersListLoaded(false);
        });

        return result.promise;
    };

    this.saveUser = function (user) {
        setSavingStatus(true);
        user = validatedUser(user);
        result = $q.defer();
        $http.post(urlUserSave, user).then(function (response) {
            result.resolve(response.data);
            setSavingStatus(false);
        }, function (errorMessages) {
            result.reject(errorMessages);
            errors.setErrors('Could not save user.', errorMessages.data.errors);
            setSavingStatus(false);
        });

        return result.promise;
    };

    this.searchUsers = function (criteria) {
        setLoadingStatus(true);
        setUsersListLoaded(false);
        result = $q.defer();
        $http.get(urlUserSearch + criteria).then(function (response) {
            result.resolve(response.data);
            setLoadingStatus(false);
            setUsersListLoaded(true);
        }, function (errorMessages) {
            result.reject(errorMessages);
            errors.setErrors('Could not find user with given criteria', errorMessages.data.errors);
            setLoadingStatus(false);
            setUsersListLoaded(false);
        });

        return result.promise;
    };

    this.deleteById = function (id) {
        setDeletionStatus(true);
        result = $q.defer();
        $http.delete(urlUserDelById + id).then(function (response) {
            result.resolve(response.data);
            setDeletionStatus(false);
        }, function (errorMessages) {
            result.reject(errorMessages);
            errors.setErrors('Could not delete user.', errorMessages.data.errors);
            setDeletionStatus(false);
        });

        return result.promise;
    };

    this.deleteAll = function () {
        setDeletionStatus(true);
        result = $q.defer();
        $http.delete(urlUserDelAll).then(function (response) {
            result.resolve(response.data);
            setDeletionStatus(false);
        }, function (errorMessages) {
            result.reject(errorMessages);
            errors.setErrors('Could not delete users.', errorMessages.data.errors);
            setDeletionStatus(false);
        });

        return result.promise;
    };

    var validatedUser = function (user) {
        if (user.id <= 0) user.id = null;
        user.firstName = user.firstName.trim();
        user.lastName = user.lastName.trim();
        return user;
    };

    this.getUsersListLoadedStatus = function () {
        return usersListLoaded;
    };

    this.getLoadingStatus = function () {
        return loadingStatus;
    };

    this.getSavingStatus = function () {
        return savingStatus;
    };

    this.getDeletionStatus = function () {
        return deletionStatus;
    };

    var setUsersListLoaded = function (value) {
        usersListLoaded = value;
    };

    var setLoadingStatus = function (value) {
        loadingStatus = value;
    };

    var setSavingStatus = function (value) {
        savingStatus = value;
    };

    var setDeletionStatus = function (value) {
        deletionStatus = value;
    };
}]);
