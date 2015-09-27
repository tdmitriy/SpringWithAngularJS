<%@include file="/WEB-INF/pages/template/includes/tags/tags.jsp" %>
<div class="col-lg-5">
    <div class="panel panel-default">
        <div class="panel-heading">
            <h3 class="panel-title">
                <i class="fa fa-user fa-fw"></i> {{ editableState ? 'Edit User' : 'Add User' }}
            </h3>
        </div>
        <div class="panel-body">
            <fieldset ng-disabled="!getUsersListLoadedStatus()">
                <form name="userForm" novalidate>
                    <div class="form-group"
                         ng-class="{ 'has-error' : userForm.firstName.$invalid &&
                         !userForm.firstName.$pristine}">
                        <div class="input-group">
                            <span class="input-group-addon"><i class="fa fa-user fa-fw"></i></span>
                            <input type="text" name="firstName" class="form-control" placeholder="First Name"
                                   ng-pattern="/^[a-zA-Z\u0400-\u04ff]*$/"
                                   ng-minlength="2" ng-maxlength="30"
                                   ng-model="user.firstName" required>
                        </div>
                        <%-- validation messages --%>
                        <div class="help-block"
                             ng-messages="userForm.firstName.$error"
                             ng-if="userForm.firstName.$invalid &&
                                                 !userForm.firstName.$pristine">
                            <p ng-message="required">First Name is required.</p>

                            <p ng-message="pattern">First Name must contains only letters.</p>

                            <p ng-message="minlength">First Name is too short.</p>

                            <p ng-message="maxlength">First Name is too long.</p>
                        </div>
                    </div>
                    <div class="form-group"
                         ng-class="{ 'has-error' : userForm.lastName.$invalid &&
                         !userForm.lastName.$pristine }">
                        <div class="input-group">
                            <span class="input-group-addon"><i class="fa fa-user fa-fw"></i></span>
                            <input type="text" name="lastName" class="form-control" placeholder="Last Name"
                                   ng-pattern="/^[a-zA-Z\u0400-\u04ff]*$/"
                                   ng-minlength="2" ng-maxlength="30"
                                   ng-model="user.lastName" required>

                        </div>
                        <%-- validation messages for lastName --%>
                        <div class="help-block"
                             ng-messages="userForm.lastName.$error"
                             ng-if="userForm.lastName.$invalid &&
                                                 !userForm.lastName.$pristine">
                            <p ng-message="required">Last Name is required.</p>

                            <p ng-message="pattern">Last Name must contains only letters.</p>

                            <p ng-message="minlength">Last Name is too short.</p>

                            <p ng-message="maxlength">Last Name is too long.</p>
                        </div>
                    </div>
                    <div class="form-group"
                         ng-class="{ 'has-error' : userForm.salary.$invalid &&
                         !userForm.salary.$pristine }">
                        <div class=" input-group">
                            <span class="input-group-addon"><i class="fa fa-usd fa-fw"></i></span>
                            <input type="number" name="salary" class="form-control"
                                   ng-model="user.salary" ng-pattern="/^[0-9]+$/"
                                   placeholder="Salary">
                        </div>
                        <%-- validation messages for salary --%>
                        <div class="help-block"
                             ng-messages="userForm.salary.$error"
                             ng-if="userForm.salary.$invalid && !userForm.salary.$pristine">
                            <p ng-message="pattern"> Salary must contains only digits without negative values.</p>
                        </div>
                    </div>

                    <div class="row">
                        <div class="col-lg-6">
                            <div class="form-group">
                                <%-- Save btn --%>
                                <button type="button" name="btn-add-user"
                                        ng-disabled="userForm.$invalid ||getSavingStatus()"
                                        ng-click="editableState ? updateUser(user) : addNewUser(user)"
                                        ng-class="{'btn btn-success btn-block' : !editableState,
                                        'btn btn-primary btn-block' : editableState}">
                                    <i class="fa fa-check-square-o fa-fw"></i>
                                    {{ getSavingStatus() ? 'Saving...' : (editableState ? 'Edit User' : 'Add User') }}
                                </button>
                            </div>
                        </div>
                        <div class="col-lg-6">
                            <div class="form-group">
                                <%-- Reset btn --%>
                                <button type="reset"
                                        ng-click="resetUserForm()"
                                        name="btnResetUser"
                                        class="btn btn-warning btn-block">
                                    <i class="fa fa-remove fa-fw"></i> Reset
                                </button>
                            </div>
                        </div>
                    </div>
                    <%-- /.row --%>
                </form>
            </fieldset>
        </div>
        <%-- /.panel-body --%>
    </div>
    <%-- /.panel --%>
</div>
<!-- /.col-lg-5 -->