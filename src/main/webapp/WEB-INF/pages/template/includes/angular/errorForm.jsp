<%@include file="/WEB-INF/pages/template/includes/tags/tags.jsp" %>

<div class="alert alert-danger alert-dismissible ng-fade" role="alert" ng-show="error()">
    <button type="button" class="close" ng-click="resetErrors()" aria-label="Close">
        <span aria-hidden="true">&times;</span>
    </button>

    <h5><i class="fa fa-exclamation-circle"></i> {{ errorList().title }}</h5>
    <ul>
        <li ng-repeat="errorMessage in errorList().messages">
            {{ errorMessage }}
        </li>
    </ul>
</div>