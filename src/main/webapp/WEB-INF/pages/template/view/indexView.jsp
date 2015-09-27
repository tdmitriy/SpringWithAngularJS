<%@include file="/WEB-INF/pages/template/includes/tags/tags.jsp" %>

<%-- Images --%>
<c:url var="spring_img" value="/resources/img/spring.png"/>
<c:url var="hibernate_img" value="/resources/img/hibernate.png"/>
<c:url var="angular_img" value="/resources/img/angularjs.png"/>
<c:url var="maven_img" value="/resources/img/maven.png"/>

<div class="container-fluid" custom-dom-directive>
    <!-- Page Heading -->
    <div class="row">
        <div class="col-lg-12">
            <h1 class="page-header">
                Project Overview
            </h1>
        </div>
    </div>
    <!-- /.row -->

    <!-- Main jumbotron for a primary marketing message or call to action -->
    <div class="jumbotron">
        <h1>Simple CRUD operations</h1>

        <p>This application demonstrates simple CRUD (<u>C</u>reate, <u>R</u>ead, <u>U</u>pdate, <u>D</u>elete)
            operations.</p>

        <p>This project using a concept of one page provided by AngularJS.</p>

        <p>For the implementation of this project the following technologies have been used:</p>

        <hr/>

        <div class="row">
            <div class="col-lg-3 col-md-4 col-xs-6 thumb">
                <a class="thumbnail" href="https://spring.io/" target="_blank">
                    <img class="img-responsive" src="${spring_img}">
                </a>
            </div>
            <div class="col-lg-3 col-md-4 col-xs-6 thumb">
                <a class="thumbnail" href="http://hibernate.org/" target="_blank">
                    <img class="img-responsive" src="${hibernate_img}">
                </a>
            </div>
            <div class="col-lg-3 col-md-4 col-xs-6 thumb">
                <a class="thumbnail" href="https://angularjs.org/" target="_blank">
                    <img class="img-responsive" src="${angular_img}">
                </a>
            </div>
            <div class="col-lg-3 col-md-4 col-xs-6 thumb">
                <a class="thumbnail" href="https://maven.apache.org/" target="_blank">
                    <img class="img-responsive" src="${maven_img}">
                </a>
            </div>
        </div>

    </div>
</div>
<!-- /.container-fluid -->