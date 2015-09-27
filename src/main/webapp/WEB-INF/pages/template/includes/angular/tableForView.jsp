<%@include file="/WEB-INF/pages/template/includes/tags/tags.jsp" %>

<%-- show this alert if users list is empty --%>
<div class="alert alert-info ng-fade" ng-show="usersList.length === 0 && !getLoadingStatus()">
    <i class="fa fa-database"></i> No users found
</div>

<div class="table-responsive" ng-show="usersList.length > 0 && !getLoadingStatus()">
    <table class="table table-bordered table-hover">
        <thead>
        <tr>
            <th>Id</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Salary</th>
        </tr>
        </thead>
        <tbody>
        <tr ng-repeat="user in usersList | orderBy:id">
            <td>{{ user.id }}</td>
            <td>{{ user.firstName }}</td>
            <td>{{ user.lastName }}</td>
            <td>{{ user.salary || 'Not set' }}</td>
        </tr>
        </tbody>
    </table>
</div>