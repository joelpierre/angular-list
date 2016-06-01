var app = angular.module('app', [])

angular.module('app')
    .controller('MyController', ["$scope", "albumsData", "$filter", function ($scope, albumsData, $filter){

        $scope.currentPage = 0;
        $scope.pageSize = 20;

        $scope.getTotalPage = function() {
            return Math.ceil($scope.albums.length/$scope.pageSize);
        };

        function getAlbums() {
            albumsData.getDetails()
                .success(function(albums){
                    $scope.albums = albums;
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
            start = +start; 

            return input.slice(start);
        }
    });

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyIsImNvbnRyb2xsZXIuanMiLCJmYWN0b3J5LmpzIiwiZmlsdGVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLElBQUEsTUFBQSxRQUFBLE9BQUEsT0FBQTs7QUNBQSxRQUFBLE9BQUE7S0FDQSxXQUFBLG9EQUFBLFVBQUEsUUFBQSxZQUFBLFFBQUE7O1FBRUEsT0FBQSxjQUFBO1FBQ0EsT0FBQSxXQUFBOzs7Ozs7O1FBT0EsT0FBQSxlQUFBLFdBQUE7WUFDQSxPQUFBLEtBQUEsS0FBQSxPQUFBLE9BQUEsT0FBQSxPQUFBOzs7Ozs7OztRQVFBLFNBQUEsWUFBQTtZQUNBLFdBQUE7aUJBQ0EsUUFBQSxTQUFBLE9BQUE7b0JBQ0EsT0FBQSxTQUFBOztpQkFFQSxNQUFBLFVBQUEsT0FBQTtvQkFDQSxRQUFBLElBQUE7O1NBRUE7O1FBRUE7Ozs7Ozs7OztBQ3hCQSxRQUFBLE9BQUE7S0FDQSxRQUFBLGNBQUEsQ0FBQSxTQUFBLFVBQUEsT0FBQTs7UUFFQSxJQUFBLE1BQUE7UUFDQSxJQUFBLGFBQUE7Ozs7Ozs7O1FBUUEsV0FBQSxhQUFBLFlBQUE7WUFDQSxPQUFBLE1BQUEsSUFBQTs7UUFFQSxPQUFBOzs7Ozs7Ozs7QUNmQSxRQUFBLE9BQUE7S0FDQSxPQUFBLGFBQUEsV0FBQTs7UUFFQSxPQUFBLFNBQUEsT0FBQSxPQUFBO1lBQ0EsSUFBQSxDQUFBLFNBQUEsQ0FBQSxNQUFBLFFBQUEsRUFBQTtZQUNBLFFBQUEsQ0FBQTs7WUFFQSxPQUFBLE1BQUEsTUFBQTs7O0FBR0EiLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsidmFyIGFwcCA9IGFuZ3VsYXIubW9kdWxlKCdhcHAnLCBbXSlcbiIsImFuZ3VsYXIubW9kdWxlKCdhcHAnKVxuICAgIC5jb250cm9sbGVyKCdNeUNvbnRyb2xsZXInLCBmdW5jdGlvbiAoJHNjb3BlLCBhbGJ1bXNEYXRhLCAkZmlsdGVyKXtcblxuICAgICAgICAkc2NvcGUuY3VycmVudFBhZ2UgPSAwO1xuICAgICAgICAkc2NvcGUucGFnZVNpemUgPSAyMDtcblxuICAgICAgICAvKipcbiAgICAgICAgICogQG5hbWUgZ2V0VG90YWxQYWdlXG4gICAgICAgICAqIEBkZXNjIEdldHMgdGhlIGN1cnJlbnQgcGFnZSBhbmQgdGhlIHBhZ2luYXRvciBmaWx0ZXJcbiAgICAgICAgICogQHJldHVybnMge051bWJlcn1cbiAgICAgICAgICovXG4gICAgICAgICRzY29wZS5nZXRUb3RhbFBhZ2UgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHJldHVybiBNYXRoLmNlaWwoJHNjb3BlLmFsYnVtcy5sZW5ndGgvJHNjb3BlLnBhZ2VTaXplKTtcbiAgICAgICAgfTtcblxuICAgICAgICAvKipcbiAgICAgICAgICogQG5hbWUgZ2V0QWxidW1zXG4gICAgICAgICAqIEBkZXNjIEdldHMgdGhlIGFycmF5IG9mIG9iamVjdCB0byB1c2UgaW4gdGhlIHRlbXBsYXRlXG4gICAgICAgICAqIEByZXR1cm5zIHtBcnJheX1cbiAgICAgICAgICovXG4gICAgICAgIGZ1bmN0aW9uIGdldEFsYnVtcygpIHtcbiAgICAgICAgICAgIGFsYnVtc0RhdGEuZ2V0RGV0YWlscygpXG4gICAgICAgICAgICAgICAgLnN1Y2Nlc3MoZnVuY3Rpb24oYWxidW1zKXtcbiAgICAgICAgICAgICAgICAgICAgJHNjb3BlLmFsYnVtcyA9IGFsYnVtcztcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIC5lcnJvcihmdW5jdGlvbiAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ3NvbWV0aGluZyB3ZW50IHdyb25nJyk7XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgfTtcblxuICAgICAgICBnZXRBbGJ1bXMoKTtcbiAgICB9KVxuIiwiLyoqXG4gKiBAbmFtZSBhbGJ1bXNEYXRhXG4gKiBAZGVzYyBBbmd1bGFyIGRpcmVjdGl2ZSB0aGF0IGNvbW11bmljYXRlcyB3aXRoIHRoZSBBUElcbiAqIEByZXR1cm5zIHtPYmplY3R9XG4gKi9cblxuYW5ndWxhci5tb2R1bGUoJ2FwcCcpXG4gICAgLmZhY3RvcnkoJ2FsYnVtc0RhdGEnLCBbJyRodHRwJywgZnVuY3Rpb24gKCRodHRwKSB7XG5cbiAgICAgICAgdmFyIHVybCA9ICdodHRwOi8vanNvbnBsYWNlaG9sZGVyLnR5cGljb2RlLmNvbS9waG90b3MnO1xuICAgICAgICB2YXIgYWxidW1zRGF0YSA9IHt9O1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbmFtZSBnZXREZXRhaWxzXG4gICAgICAgICAqIEBkZXNjIE1ldGhvZCB0aGF0IHJldHVybnMgdGhlIEFycmF5IG9mIG9iamVjdC4gV2lsbCBiZSBjYWxsZWQgaW5cbiAgICAgICAgICogICAgICAgQ29udHJvbGxlclxuICAgICAgICAgKiBAcmV0dXJucyB7T2JqZWN0fVxuICAgICAgICAgKi9cbiAgICAgICAgYWxidW1zRGF0YS5nZXREZXRhaWxzID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuICRodHRwLmdldCh1cmwpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBhbGJ1bXNEYXRhO1xuICAgIH1dKVxuIiwiLyoqXG4gKiBAbmFtZSBzdGFydEZyb21cbiAqIEBkZXNjIEN1c3RvbSBGaWx0ZXIgdGhhdCBkaXNwbGF5cyBpdGVtcyBiYXNlZCBvbiBwYWdpbmF0aW9uXG4gKiBAcmV0dXJucyB7QXJyYXl9XG4gKi9cblxuYW5ndWxhci5tb2R1bGUoJ2FwcCcpXG4gICAgLmZpbHRlcignc3RhcnRGcm9tJywgZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uKGlucHV0LCBzdGFydCkge1xuICAgICAgICAgICAgaWYgKCFpbnB1dCB8fCAhaW5wdXQubGVuZ3RoKSB7IHJldHVybjsgfVxuICAgICAgICAgICAgc3RhcnQgPSArc3RhcnQ7IC8vcGFyc2UgdG8gaW50XG5cbiAgICAgICAgICAgIHJldHVybiBpbnB1dC5zbGljZShzdGFydCk7XG4gICAgICAgIH1cbiAgICB9KTtcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
