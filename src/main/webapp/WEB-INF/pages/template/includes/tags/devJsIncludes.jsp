<%@include file="/WEB-INF/pages/template/includes/tags/tags.jsp" %>
<%-- dev --%>
<%-- JavaScripts --%>
<%-- Libs/dependences --%>
<c:url var="jquery_js" value="/resources/lib/jquery.min.js"/>
<c:url var="bootstrap_js" value="/resources/lib/bootstrap.min.js"/>
<c:url var="angular_js" value="/resources/lib/angular.min.js"/>
<c:url var="angular_route_js" value="/resources/lib/dependencies/angular-route.min.js"/>
<c:url var="angular_modal_js" value="/resources/lib/dependencies/angular-modal-service.min.js"/>
<c:url var="angular_loading_bar_js" value="/resources/lib/dependencies/angular-loading-bar.min.js"/>
<c:url var="angular_notification_js" value="/resources/lib/dependencies/angular-ui-notification.min.js"/>
<c:url var="angular_messages_js" value="/resources/lib/dependencies/angular-messages.min.js"/>
<c:url var="angular_animate_js" value="/resources/lib/dependencies/angular-animate.min.js"/>

<%-- App --%>
<c:url var="app_js" value="/resources/dev/js/angular-app/angular-app.js"/>
<c:url var="app_user_service_js" value="/resources/dev/js/angular-app/service/user-service.js"/>
<c:url var="app_modal_service_js" value="/resources/dev/js/angular-app/service/modal-service.js"/>
<c:url var="app_error_service_js" value="/resources/dev/js/angular-app/service/error-service.js"/>
<c:url var="app_factory_js" value="/resources/dev/js/angular-app/service/app-factory.js"/>
<c:url var="app_dom_dir_js" value="/resources/dev/js/angular-app/directive/custom-dom-directive.js"/>
<c:url var="app_index_controller_js" value="/resources/dev/js/angular-app/controller/index-controller.js"/>
<c:url var="app_modal_controller_js" value="/resources/dev/js/angular-app/controller/modal-controller.js"/>
<c:url var="app_user_controller_js" value="/resources/dev/js/angular-app/controller/user-controller.js"/>
<%-- end dev --%>

<%-- dev --%>
<!-- jQuery -->
<script src="${jquery_js}"></script>

<!-- Bootstrap Core JS -->
<script src="${bootstrap_js}"></script>

<!-- AngularJS, AngularRoute, Modal, LoadingBar -->
<script src="${angular_js}"></script>
<script src="${angular_animate_js}"></script>
<script src="${angular_route_js}"></script>
<script src="${angular_modal_js}"></script>
<script src="${angular_loading_bar_js}"></script>
<script src="${angular_notification_js}"></script>
<script src="${angular_messages_js}"></script>

<!-- AngularApp -->
<script src="${app_js}"></script>

<!-- Controllers -->
<script src="${app_index_controller_js}"></script>
<script src="${app_modal_controller_js}"></script>
<script src="${app_user_controller_js}"></script>

<!-- Directives -->
<script src="${app_dom_dir_js}"></script>

<!-- Services -->
<script src="${app_factory_js}"></script>
<script src="${app_error_service_js}"></script>
<script src="${app_modal_service_js}"></script>
<script src="${app_user_service_js}"></script>
<%-- end dev --%>