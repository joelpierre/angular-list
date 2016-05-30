angular.module('photoApp').controller('photoCtrl', function ($scope, $http, MyService) {
    $scope.photoService = MyService;
});
