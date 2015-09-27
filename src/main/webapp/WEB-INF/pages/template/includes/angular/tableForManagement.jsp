<%@include file="/WEB-INF/pages/template/includes/tags/tags.jsp" %>
<div class="col-lg-7">
    <div class="panel panel-default">
        <div class="panel-heading clearfix">
            <h3 class="panel-title pull-left"><i class="fa fa-table fa-fw"></i> Table</h3>

            <div class="refresh-table pull-left">
                <button class="btn btn-primary btn-xs"
                        ng-click="getUsersList()"
                        title="Refresh table">
                    <i class="fa fa-refresh fa-fw"></i>
                </button>
            </div>

            <div class="btn-group pull-right">
                <div class="btn-group-xs" ng-show="!searchableState">
                    <button class="btn btn-danger btn-xs ng-fade"
                            ng-show="!getLoadingStatus() && usersList.length > 1"
                            ng-disabled="getDeletionStatus()"
                            ng-click="modal.showConfirm('deleteAll')"
                            title="Delete all">
                        <i class="fa fa-trash-o fa-fw"></i>
                        Delete all
                    </button>
                </div>
            </div>
        </div>

        <div class="panel-body">

            <%-- include search form --%>
            <%@include file="/WEB-INF/pages/template/includes/angular/searchForm.jsp" %>

            <%-- include loading spinner --%>
            <%@include file="/WEB-INF/pages/template/includes/angular/loadingSpinner.jsp" %>

            <div class="alert alert-info ng-fade" ng-show="usersList.length === 0 && !getLoadingStatus()">
                <i class="fa fa-database"></i> No users found
            </div>

            <div class="table-responsive" ng-show="usersList.length > 0  && !getLoadingStatus()">
                <table class="table table-bordered table-hover">
                    <thead>
                    <tr>
                        <th>Id</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Salary</th>
                        <th>Action</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr ng-repeat="user in usersList | orderBy:id">
                        <td>{{ user.id }}</td>
                        <td>{{ user.firstName }}</td>
                        <td>{{ user.lastName }}</td>
                        <td>{{ user.salary || 'Not set' }}</td>
                        <td class="text-center">
                            <button type="button" class="btn btn-danger btn-xs"
                                    ng-disabled="getDeletionStatus()"
                                    ng-click="modal.showConfirm('deleteById', user.id)"
                                    title="Delete">
                                <i class="fa fa-trash-o fa-fw"></i>
                            </button>
                            <button type="button" class="btn btn-primary btn-xs"
                                    ng-click="editUser(user)"
                                    title="Edit">
                                <i class="fa fa-pencil fa-fw"></i>
                            </button>
                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>
            <!-- /.table-responsive -->
        </div>
        <!-- /.panel-body -->
    </div>
    <!-- /.panel panel-default -->
</div>
<!-- /.col-lg-7 -->