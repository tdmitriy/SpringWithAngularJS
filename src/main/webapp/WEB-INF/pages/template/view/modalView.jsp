<%@include file="/WEB-INF/pages/template/includes/tags/tags.jsp" %>

<div class="modal fade">
    <div class="modal-dialog modal-sm">
        <div class="modal-content">
            <div class="modal-header">
                <button type="button" class="close" ng-click="close('cancel')" data-dismiss="modal"
                        aria-hidden="true">&times;</button>
                <h4 class="modal-title">{{ modalOptions.headerText }}</h4>
            </div>
            <div class="modal-body">
                <p>{{ modalOptions.bodyText }}</p>
            </div>
            <div class="modal-footer">
                <button type="button" ng-click="close()" class="btn btn-danger" data-dismiss="modal">
                    {{ modalOptions.actionButtonText }}
                </button>
                <button type="button" ng-click="close('cancel')" class="btn btn-default" data-dismiss="modal">
                    {{ modalOptions.closeButtonText }}
                </button>
            </div>
        </div>
    </div>
</div>
