angular.module('photoApp').factory('photoService', function($http) {
    var photoService = {};

    $http.get('resources/data.json').success(function(response) {
        photoService.data = response;
    });

    return MyService;
});
