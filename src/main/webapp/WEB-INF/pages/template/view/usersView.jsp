<%@include file="/WEB-INF/pages/template/includes/tags/tags.jsp" %>

<div class="container-fluid" custom-dom-directive>

    <!-- Page Heading -->
    <div class="row">
        <div class="col-lg-12">
            <h1 class="page-header">
                Users table
            </h1>
            <ol class="breadcrumb">
                <li>
                    <i class="fa fa-home fa-fw"></i><a href="${indexURL}"> Home</a>
                </li>
                <li class="active">
                    <i class="fa fa-users fa-fw"></i> Show users
                </li>
            </ol>
        </div>
    </div>
    <!-- /.row -->

    <div class="row">
        <div class="col-lg-12">
            <div class="panel panel-default">
                <div class="panel-heading clearfix">
                    <h3 class="panel-title  pull-left"><i class="fa fa-table fa-fw"></i> Table</h3>
                    <%-- refresh button --%>
                    <div class="refresh-table pull-left">
                        <button class="btn btn-primary btn-xs"
                                ng-click="getUsersList()"
                                title="Refresh table">
                            <i class="fa fa-refresh fa-fw"></i>
                        </button>
                    </div>
                </div>

                <div class="panel-body">

                    <%-- include error form --%>
                    <%@include file="/WEB-INF/pages/template/includes/angular/errorForm.jsp" %>

                    <div class="row">
                        <div class="col-lg-6">

                            <%-- include search form --%>
                            <%@include file="/WEB-INF/pages/template/includes/angular/searchForm.jsp" %>

                        </div>
                    </div>

                    <%-- include loading spinner --%>
                    <%@include file="/WEB-INF/pages/template/includes/angular/loadingSpinner.jsp" %>

                    <%-- include table for users view --%>
                    <%@include file="/WEB-INF/pages/template/includes/angular/tableForView.jsp" %>

                </div>
            </div>
        </div>
    </div>
    <!-- /.row -->
</div>
<!-- /.container-fluid -->