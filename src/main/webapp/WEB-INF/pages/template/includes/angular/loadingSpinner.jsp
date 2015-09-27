<%@include file="/WEB-INF/pages/template/includes/tags/tags.jsp" %>
<%-- loading spinner --%>
<div class="text-center" ng-show="getLoadingStatus() === true">
    <h3>Loading...</h3>

    <div class="la-line-scale la-dark la-3x center-block">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
    </div>
</div>
<%-- end loading spinner --%>