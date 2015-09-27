<%@include file="/WEB-INF/pages/template/includes/tags/tags.jsp" %>

<%-- dev --%>
<%-- Styles --%>
<c:url var="bootstrap_css" value="/resources/lib/css/bootstrap.min.css"/>
<c:url var="angular_loading_bar_css" value="/resources/lib/css/angular-loading-bar.css"/>
<c:url var="angular_notification_css" value="/resources/lib/css/angular-ui-notification.min.css"/>

<c:url var="custom_css" value="/resources/dev/css/custom.css"/>
<%-- end dev --%>

<!-- Bootstrap Core CSS -->
<link rel="stylesheet" media="all" href="${bootstrap_css}">

<!-- Angular loading bar CSS -->
<link rel="stylesheet" media="all" href="${angular_loading_bar_css}">

<link rel="stylesheet" media="all" href="${angular_notification_css}">

<!-- Font awesome CSS -->
<link rel="stylesheet" media="all" href="${font_awesome_css}">

<!-- Custom CSS -->
<link rel="stylesheet" media="all" href="${custom_css}">