
//must specify the module name
angular.module('myApp').controller('resumeCtrl', function($scope){

 $scope.particulars = {name:'cliff', age: '31'};

 console.log($scope.particulars);

})
