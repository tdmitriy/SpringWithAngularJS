<%@include file="/WEB-INF/pages/template/includes/tags/tags.jsp" %>
<div class="container-fluid" custom-dom-directive>
    <div class="row">
        <div class="col-md-12">
            <div class="error-template">
                <h1>Oops!</h1>

                <h2>404 Not Found</h2>

                <div class="error-details">
                    <h3>Sorry, an error has occurred, Requested page not found!</h3>
                </div>
                <div class="error-actions">
                    <a href="${indexURL}" class="btn btn-primary btn-lg">
                        <i class="fa fa-home fa-fw"></i>
                        Take Me Home </a>
                </div>
            </div>
        </div>
    </div>
</div>
