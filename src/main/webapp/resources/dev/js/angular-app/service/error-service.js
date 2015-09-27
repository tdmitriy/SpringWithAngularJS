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
