var app = angular.module('app', [])

angular.module('app')
    .controller('MyController', ["$scope", "albumsData", "$filter", function ($scope, albumsData, $filter){

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
    }])

angular.module('app')
    .factory('albumsData', ['$http', function ($http) {

        var url = 'http://jsonplaceholder.typicode.com/photos';
        var albumsData = {};

        albumsData.getDetails = function () {
            return $http.get(url);
        }

        return albumsData;
    }])

angular.module('app')
    .filter('startFrom', function() {
        return function(input, start) {
            if (!input || !input.length) { return; }
            start = +start; //parse to int
            return input.slice(start);
        }
    });

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyIsImNvbnRyb2xsZXIuanMiLCJmYWN0b3J5LmpzIiwiZmlsdGVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLElBQUEsTUFBQSxRQUFBLE9BQUEsT0FBQTs7QUNBQSxRQUFBLE9BQUE7S0FDQSxXQUFBLG9EQUFBLFVBQUEsUUFBQSxZQUFBLFFBQUE7O1FBRUEsT0FBQSxjQUFBO1FBQ0EsT0FBQSxXQUFBOztRQUVBLFNBQUEsU0FBQSxPQUFBLE1BQUE7WUFDQSxPQUFBLFNBQUEsUUFBQSxVQUFBO1lBQ0EsT0FBQSxhQUFBLEtBQUEsS0FBQSxNQUFBLE9BQUEsVUFBQTtTQUNBOztRQUVBLFNBQUEsWUFBQTtZQUNBLFdBQUE7aUJBQ0EsUUFBQSxTQUFBLE9BQUE7b0JBQ0EsVUFBQSxPQUFBLFFBQUE7O2lCQUVBLE1BQUEsVUFBQSxPQUFBO29CQUNBLFFBQUEsSUFBQTs7U0FFQTs7UUFFQTs7O0FDckJBLFFBQUEsT0FBQTtLQUNBLFFBQUEsY0FBQSxDQUFBLFNBQUEsVUFBQSxPQUFBOztRQUVBLElBQUEsTUFBQTtRQUNBLElBQUEsYUFBQTs7UUFFQSxXQUFBLGFBQUEsWUFBQTtZQUNBLE9BQUEsTUFBQSxJQUFBOzs7UUFHQSxPQUFBOzs7QUNWQSxRQUFBLE9BQUE7S0FDQSxPQUFBLGFBQUEsV0FBQTtRQUNBLE9BQUEsU0FBQSxPQUFBLE9BQUE7WUFDQSxJQUFBLENBQUEsU0FBQSxDQUFBLE1BQUEsUUFBQSxFQUFBO1lBQ0EsUUFBQSxDQUFBO1lBQ0EsT0FBQSxNQUFBLE1BQUE7OztBQUdBIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbInZhciBhcHAgPSBhbmd1bGFyLm1vZHVsZSgnYXBwJywgW10pXG4iLCJhbmd1bGFyLm1vZHVsZSgnYXBwJylcbiAgICAuY29udHJvbGxlcignTXlDb250cm9sbGVyJywgZnVuY3Rpb24gKCRzY29wZSwgYWxidW1zRGF0YSwgJGZpbHRlcil7XG5cbiAgICAgICAgJHNjb3BlLmN1cnJlbnRQYWdlID0gMDtcbiAgICAgICAgJHNjb3BlLnBhZ2VTaXplID0gMjA7XG5cbiAgICAgICAgZnVuY3Rpb24gc2hvd0RhdGEodG90YWwsIGRhdGEpIHtcbiAgICAgICAgICAgICRzY29wZS5hbGJ1bXMgPSAkZmlsdGVyKCdmaWx0ZXInKShkYXRhKTtcbiAgICAgICAgICAgICRzY29wZS50b3RhbFBhZ2VzID0gTWF0aC5jZWlsKHRvdGFsLyRzY29wZS5wYWdlU2l6ZSk7O1xuICAgICAgICB9O1xuXG4gICAgICAgIGZ1bmN0aW9uIGdldEFsYnVtcygpIHtcbiAgICAgICAgICAgIGFsYnVtc0RhdGEuZ2V0RGV0YWlscygpXG4gICAgICAgICAgICAgICAgLnN1Y2Nlc3MoZnVuY3Rpb24oYWxidW1zKXtcbiAgICAgICAgICAgICAgICAgICAgc2hvd0RhdGEgKGFsYnVtcy5sZW5ndGgsIGFsYnVtcyk7XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAuZXJyb3IoZnVuY3Rpb24gKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdzb21ldGhpbmcgd2VudCB3cm9uZycpO1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgIH07XG5cbiAgICAgICAgZ2V0QWxidW1zKCk7XG4gICAgfSlcbiIsImFuZ3VsYXIubW9kdWxlKCdhcHAnKVxuICAgIC5mYWN0b3J5KCdhbGJ1bXNEYXRhJywgWyckaHR0cCcsIGZ1bmN0aW9uICgkaHR0cCkge1xuXG4gICAgICAgIHZhciB1cmwgPSAnaHR0cDovL2pzb25wbGFjZWhvbGRlci50eXBpY29kZS5jb20vcGhvdG9zJztcbiAgICAgICAgdmFyIGFsYnVtc0RhdGEgPSB7fTtcblxuICAgICAgICBhbGJ1bXNEYXRhLmdldERldGFpbHMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gJGh0dHAuZ2V0KHVybCk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gYWxidW1zRGF0YTtcbiAgICB9XSlcbiIsImFuZ3VsYXIubW9kdWxlKCdhcHAnKVxuICAgIC5maWx0ZXIoJ3N0YXJ0RnJvbScsIGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gZnVuY3Rpb24oaW5wdXQsIHN0YXJ0KSB7XG4gICAgICAgICAgICBpZiAoIWlucHV0IHx8ICFpbnB1dC5sZW5ndGgpIHsgcmV0dXJuOyB9XG4gICAgICAgICAgICBzdGFydCA9ICtzdGFydDsgLy9wYXJzZSB0byBpbnRcbiAgICAgICAgICAgIHJldHVybiBpbnB1dC5zbGljZShzdGFydCk7XG4gICAgICAgIH1cbiAgICB9KTtcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
