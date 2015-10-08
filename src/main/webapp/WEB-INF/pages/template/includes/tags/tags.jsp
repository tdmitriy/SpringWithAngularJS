<%@ page session="false"%>
<%@ page pageEncoding="UTF-8" contentType="text/html;charset=UTF-8" language="java" %>
<%@ taglib prefix="spring" uri="http://www.springframework.org/tags" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions" %>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form" %>

<spring:url value="#/" var="indexURL"/>
<spring:url value="#/users/show" var="usersShowURL"/>
<spring:url value="#/users/management" var="usersManagementURL"/>
<spring:url value="https://github.com/tdmitriy/SpringWithAngularJS" var="githubUrl"/>