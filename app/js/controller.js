angular.module('app')
    .controller('MyController', function ($scope, albumsData, $filter){

        $scope.currentPage = 0;
        $scope.pageSize = 20;

        function showData(total, data) {
            $scope.albums = $filter('filter')(data);
            $scope.totalPages = Math.ceil(total/$scope.pageSize);;
        };

        function getAlbums() {
            albumsData.getDetails()
                .success(function(albums){
                    showData (albums.length, albums);
                })
                .error(function (error) {
                    console.log('something went wrong');
                })
        };

        getAlbums();
    })
