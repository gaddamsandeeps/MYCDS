

define([   
    'uiRouter',
    "ngStorage",
    'services/common/serviceLoader',
    "services/dashboardWidgetService",
    'services/dashboardService',
    'services/registerService',
    'services/common/appUrlService',
    'controllers/dashboardController',
    "controllers/headerController",
    "controllers/footerController",
    "modalControllers/cadreVerificationController",
    "modalControllers/notificationDetailsController",
    "directives/dashboard/cadreVerificationAllDirective",
    "directives/dashboard/cadreVerificationOfficeDirective",
    "directives/dashboard/cadreVerificationSelfDirective",  
    "directives/dashboard/tasksageChartDirective",
    "directives/dashboard/mytasksChartDirective",
    "directives/dashboard/taskstrendChartDirective",
    "directives/dashboard/selfTasksDirective",
    "directives/dashboard/teamTasksDirective",
    "directives/dashboard/notificationsDirective",
    "directives/dashboard/eventsBannerDirective",
    "directives/navDropdownDirective",
    "directives/dashboard/cadreVerificationNewDirective",
    "directives/dashboard/cadreVerificationExistingDirective",
    "directives/dashboard/cadreVerificationsDirective",
    "directives/dashboard/cadreFollowupsDirective",
    "directives/dashboard/membershipTrendChartDirective",
    "angularDashboard",
    "angularResource",
    "angularSanitize",
    "widgetOptions",
    "angularCharts",
    "angularGrid",
    "directives/dashboard/testD",
    "d3",
    "services/common/appModalService",
    "bootstrap"
    ], function () {
    var app = angular.module('CDSDASHBOARD', ['ui.router',
    										"chart.js",
    										'serviceModule',
    										'controllerModule',
    										'directiveModule',
    										"ui.dashboard",
    										"ngResource",
    										"ngSanitize",
    										'ngTouch', 
    										'ui.grid', 
    										'ui.grid.pagination',
    										"ui.bootstrap",
                                            "ngStorage"
    										]);
    return app;
});