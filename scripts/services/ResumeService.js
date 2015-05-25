(function(angular){
    angular.module('Portfolio')
        .service('ResumeService', ResumeService);

    ResumeService.$inject = ['$http'];

    function ResumeService($http){
        this.getResume = function(){
            return $http.get('./json/resume.json');
        }
    }
}(angular))