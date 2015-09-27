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
        }]);