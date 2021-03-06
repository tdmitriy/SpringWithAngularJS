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
    /* Fade in effect on page load */
    $(".container-fluid").fadeIn(200);
};

JqueryCustom.loadScripts = function () {
    JqueryCustom.misc();
};