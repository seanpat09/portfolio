(function(angular){
    'use strict'
    angular.module('Portfolio',['ui.bootstrap', 'ui.router'])
    .config(function($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise("/experience");
        $stateProvider
            .state('experience', {
              url: "/experience",
              templateUrl: "views/experience.html"
            })
            
            .state('github', {
              url: "/github",
              templateUrl: "views/github.html"
            })
    });
    
}(angular));