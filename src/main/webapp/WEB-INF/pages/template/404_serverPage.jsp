<%@include file="/WEB-INF/pages/template/includes/tags/tags.jsp" %>
<html>
<head>
    <title>Page not found</title>
</head>
<body>
<div>
    <div class="error-template">
        <h1>Oops!</h1>

        <h2>404 Not Found</h2>

        <div class="error-details">
            Sorry, an error has occurred, Requested page not found!
        </div>
        <div class="error-actions">
            <br/>
            <a href="${pageContext.request.contextPath}/">
                Take Me Home </a>
        </div>
    </div>
</div>
</body>
</html>
