(function(angular){
    angular.module('Portfolio')
        .controller('ExperienceCtrl', ExperienceCtrl);

    ExperienceCtrl.$inject = ['$scope', 'ResumeService'];

    function ExperienceCtrl($scope, ResumeService){
         var promise = ResumeService.getResume();
         promise.then(
            function(result){
                $scope.resume = result.data;
            },
            function(error){
                alert(error);
            }
        );
    }
}(angular))