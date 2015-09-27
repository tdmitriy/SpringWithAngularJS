<%@include file="/WEB-INF/pages/template/includes/tags/tags.jsp" %>

<fieldset ng-disabled="!getUsersListLoadedStatus()">
    <form name="searchForm" novalidate>
        <div class="form-group"
             ng-class="{ 'has-error' : searchForm.criteria.$invalid &&
                !searchForm.criteria.$pristine}">
            <div class="input-group">
                <input type="text" class="form-control"
                       name="criteria"
                       ng-model="searchField.criteria"
                       ng-maxlength="30"
                       placeholder="Search user..." required>
                    <span class="input-group-btn">
                        <button class="btn btn-default" type="button"
                                ng-click="searchUsers(searchField.criteria)"
                                ng-disabled="searchForm.$invalid || getLoadingStatus()">
                            <i class="fa fa-search fa-fw"></i> search
                        </button>
                        <button class="btn btn-default" type="reset" ng-click="resetSearchForm()">
                            <i class="fa fa-remove fa-fw"></i> clear
                        </button>
                    </span>
            </div>
            <%-- validation messages --%>
            <div class="help-block"
                 ng-messages="searchForm.criteria.$error"
                 ng-show="searchForm.criteria.$invalid &&
                                                 !searchForm.criteria.$pristine">
                <p ng-message="required">Search criteria is required.</p>

                <p ng-message="maxlength">Your search criteria is too long.</p>
            </div>
        </div>
    </form>
</fieldset>