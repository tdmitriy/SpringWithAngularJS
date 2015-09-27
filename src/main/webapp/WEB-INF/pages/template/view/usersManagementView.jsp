<%@include file="/WEB-INF/pages/template/includes/tags/tags.jsp" %>

<div class="container-fluid" custom-dom-directive>

    <!-- Page Heading -->
    <div class="row">
        <div class="col-lg-12">
            <h1 class="page-header">
                Users management
            </h1>
            <ol class="breadcrumb">
                <li>
                    <i class="fa fa-home fa-fw"></i><a href="${indexURL}"> Home</a>
                </li>
                <li class="active">
                    <i class="fa fa-users fa-fw"></i> Users management
                </li>
            </ol>
        </div>
    </div>
    <!-- /.row -->

    <div class="row">
        <div class="col-lg-12">
            <div class="panel panel-default">
                <div class="panel-heading">
                    <h3 class="panel-title"><i class="fa fa-users fa-fw"></i> Users Panel</h3>
                </div>
                <div class="panel-body">
                    <%-- include error form --%>
                    <%@include file="/WEB-INF/pages/template/includes/angular/errorForm.jsp" %>

                    <div class="row">

                        <%-- include table for management --%>
                        <%@include file="/WEB-INF/pages/template/includes/angular/tableForManagement.jsp" %>

                        <%-- include user form --%>
                        <%@include file="/WEB-INF/pages/template/includes/angular/userForm.jsp" %>

                    </div>
                    <!-- /.row -->
                </div>
                <!-- /.panel-body -->
            </div>
            <!-- /.panel panel-default -->
        </div>
        <!-- /.col-lg-12 -->
    </div>
    <!-- /.row -->
</div>
<!-- /.container-fluid -->