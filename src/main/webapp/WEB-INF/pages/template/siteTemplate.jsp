<%@include file="/WEB-INF/pages/template/includes/tags/tags.jsp" %>
<%-- dev mode (set mode to 'false' and then project will be used min.js and min.css) --%>
<c:set var="devMode" value="false"/>
<%-- end dev mode --%>

<c:url var="font_awesome_css" value="/resources/release/css/font-awesome/css/font-awesome.min.css"/>

<!DOCTYPE html>
<html lang="en" ng-app="AngularApp">

<head>

    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title>Spring MVC crud operations</title>

    <c:choose>
        <c:when test="${devMode eq true}">
            <%@include file="/WEB-INF/pages/template/includes/tags/devCssIncludes.jsp" %>
        </c:when>
        <c:otherwise>
            <%@include file="/WEB-INF/pages/template/includes/tags/prodCssIncludes.jsp" %>
        </c:otherwise>
    </c:choose>

    <link rel="stylesheet" media="all" href="${font_awesome_css}">

</head>

<body>
<div id="wrapper">

    <!-- Navigation -->
    <nav class="navbar navbar-inverse navbar-fixed-top" role="navigation">
        <!-- Brand and toggle get grouped for better mobile display -->
        <div class="navbar-header">
            <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-ex1-collapse">
                <span class="sr-only">Toggle navigation</span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
            </button>
            <a class="navbar-brand" href="${indexURL}">Spring MVC simple CRUD</a>
        </div>
        <!-- Top Menu Items -->
        <ul class="nav navbar-right top-nav">
            <li>
                <a href="${githubUrl}" target="_blank"><i class="fa fa-fw fa-github"></i> View code on
                    Github </a>
            </li>
        </ul>
        <!-- Sidebar Menu Items - These collapse to the responsive navigation menu on small screens -->
        <div class="collapse navbar-collapse navbar-ex1-collapse">
            <ul class="nav navbar-nav side-nav">
                <li>
                    <a href="${indexURL}"><i class="fa fa-fw fa-home"></i> Home</a>
                </li>
                <li>
                    <a href="javascript:" data-toggle="collapse" data-target="#usersToogle">
                        <i class="fa fa-fw fa-users"></i> Users <i class="fa fa-fw fa-caret-down"></i></a>
                    <ul id="usersToogle" class="collapse in">
                        <li class="active">
                            <a href="${usersShowURL}">Show users</a>
                        </li>
                        <li>
                            <a href="${usersManagementURL}">Users management</a>
                        </li>
                    </ul>
                </li>
            </ul>
        </div>
        <!-- /.navbar-collapse -->
    </nav>

    <div id="page-wrapper" ng-view>
        <!-- views will be injected here -->
    </div>
    <!-- /#page-wrapper -->

</div>
<!-- /#wrapper -->

<%-- include scripts to footer to increase page loading --%>
<c:choose>
    <c:when test="${devMode eq true}">
        <%@include file="/WEB-INF/pages/template/includes/tags/devJsIncludes.jsp" %>
    </c:when>
    <c:otherwise>
        <%@include file="/WEB-INF/pages/template/includes/tags/prodJsIncludes.jsp" %>
    </c:otherwise>
</c:choose>

</body>

</html>
