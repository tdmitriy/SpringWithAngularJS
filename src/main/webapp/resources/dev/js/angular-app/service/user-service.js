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
