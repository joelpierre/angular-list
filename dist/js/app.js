var app = angular.module('app', [])

angular.module('app')
    .controller('MyController', ["$scope", "albumsData", "$filter", function ($scope, albumsData, $filter){

        $scope.currentPage = 0;
        $scope.pageSize = 20;

        $scope.getTotalPage = function() {
            if($scope.albums) {
                $scope.totalPages = Math.ceil($scope.albums.length/$scope.pageSize);
                return $scope.totalPages;
            }
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyIsImNvbnRyb2xsZXIuanMiLCJmYWN0b3J5LmpzIiwiZmlsdGVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLElBQUEsTUFBQSxRQUFBLE9BQUEsT0FBQTs7QUNBQSxRQUFBLE9BQUE7S0FDQSxXQUFBLG9EQUFBLFVBQUEsUUFBQSxZQUFBLFFBQUE7O1FBRUEsT0FBQSxjQUFBO1FBQ0EsT0FBQSxXQUFBOzs7Ozs7O1FBT0EsT0FBQSxlQUFBLFdBQUE7WUFDQSxHQUFBLE9BQUEsUUFBQTtnQkFDQSxPQUFBLGFBQUEsS0FBQSxLQUFBLE9BQUEsT0FBQSxPQUFBLE9BQUE7Z0JBQ0EsT0FBQSxPQUFBOzs7Ozs7Ozs7UUFTQSxTQUFBLFlBQUE7Ozs7Ozs7WUFPQSxXQUFBO2lCQUNBLFFBQUEsU0FBQSxPQUFBO29CQUNBLE9BQUEsU0FBQTs7aUJBRUEsTUFBQSxVQUFBLE9BQUE7b0JBQ0EsUUFBQSxJQUFBOztTQUVBOztRQUVBOzs7Ozs7Ozs7QUNqQ0EsUUFBQSxPQUFBO0tBQ0EsUUFBQSxjQUFBLENBQUEsU0FBQSxVQUFBLE9BQUE7O1FBRUEsSUFBQSxNQUFBO1FBQ0EsSUFBQSxhQUFBOzs7Ozs7OztRQVFBLFdBQUEsYUFBQSxZQUFBO1lBQ0EsT0FBQSxNQUFBLElBQUE7O1FBRUEsT0FBQTs7Ozs7Ozs7O0FDZkEsUUFBQSxPQUFBO0tBQ0EsT0FBQSxhQUFBLFdBQUE7O1FBRUEsT0FBQSxTQUFBLE9BQUEsT0FBQTtZQUNBLElBQUEsQ0FBQSxTQUFBLENBQUEsTUFBQSxRQUFBLEVBQUE7WUFDQSxRQUFBLENBQUE7O1lBRUEsT0FBQSxNQUFBLE1BQUE7OztBQUdBIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbInZhciBhcHAgPSBhbmd1bGFyLm1vZHVsZSgnYXBwJywgW10pXG4iLCJhbmd1bGFyLm1vZHVsZSgnYXBwJylcbiAgICAuY29udHJvbGxlcignTXlDb250cm9sbGVyJywgZnVuY3Rpb24gKCRzY29wZSwgYWxidW1zRGF0YSwgJGZpbHRlcil7XG5cbiAgICAgICAgJHNjb3BlLmN1cnJlbnRQYWdlID0gMDtcbiAgICAgICAgJHNjb3BlLnBhZ2VTaXplID0gMjA7XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBuYW1lIGdldFRvdGFsUGFnZVxuICAgICAgICAgKiBAZGVzYyBHZXRzIHRoZSBudW1iZXIgb2YgcGFnZXMgd2hlbiB0aGUgcGFnaW5hdGlvbiBvcHRpb24gY2hhbmdlc1xuICAgICAgICAgKiBAcmV0dXJucyB7TnVtYmVyfVxuICAgICAgICAgKi9cbiAgICAgICAgJHNjb3BlLmdldFRvdGFsUGFnZSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgaWYoJHNjb3BlLmFsYnVtcykge1xuICAgICAgICAgICAgICAgICRzY29wZS50b3RhbFBhZ2VzID0gTWF0aC5jZWlsKCRzY29wZS5hbGJ1bXMubGVuZ3RoLyRzY29wZS5wYWdlU2l6ZSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuICRzY29wZS50b3RhbFBhZ2VzO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbmFtZSBnZXRBbGJ1bXNcbiAgICAgICAgICogQGRlc2MgR2V0cyB0aGUgYXJyYXkgb2Ygb2JqZWN0IHRvIHVzZSBpbiB0aGUgdGVtcGxhdGVcbiAgICAgICAgICogQHJldHVybnMge0FycmF5fVxuICAgICAgICAgKi9cbiAgICAgICAgZnVuY3Rpb24gZ2V0QWxidW1zKCkge1xuXG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIEBuYW1lIGdldERldGFpbHNcbiAgICAgICAgICAgICAqIEBkZXNjIEEgbWV0aG9kIGRlZmluZWQgaW4gZmFjdG9yeSB0aGF0IHJldHJpdmVzIGRhdGEgZnJvbSBBUElcbiAgICAgICAgICAgICAqIEByZXR1cm5zIHtPYmplY3R9XG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIGFsYnVtc0RhdGEuZ2V0RGV0YWlscygpXG4gICAgICAgICAgICAgICAgLnN1Y2Nlc3MoZnVuY3Rpb24oYWxidW1zKXtcbiAgICAgICAgICAgICAgICAgICAgJHNjb3BlLmFsYnVtcyA9IGFsYnVtcztcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIC5lcnJvcihmdW5jdGlvbiAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ3NvbWV0aGluZyB3ZW50IHdyb25nJyk7XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgfTtcblxuICAgICAgICBnZXRBbGJ1bXMoKTtcbiAgICB9KVxuIiwiLyoqXG4gKiBAbmFtZSBhbGJ1bXNEYXRhXG4gKiBAZGVzYyBBbmd1bGFyIGRpcmVjdGl2ZSB0aGF0IGNvbW11bmljYXRlcyB3aXRoIHRoZSBBUElcbiAqIEByZXR1cm5zIHtPYmplY3R9XG4gKi9cblxuYW5ndWxhci5tb2R1bGUoJ2FwcCcpXG4gICAgLmZhY3RvcnkoJ2FsYnVtc0RhdGEnLCBbJyRodHRwJywgZnVuY3Rpb24gKCRodHRwKSB7XG5cbiAgICAgICAgdmFyIHVybCA9ICdodHRwOi8vanNvbnBsYWNlaG9sZGVyLnR5cGljb2RlLmNvbS9waG90b3MnO1xuICAgICAgICB2YXIgYWxidW1zRGF0YSA9IHt9O1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbmFtZSBnZXREZXRhaWxzXG4gICAgICAgICAqIEBkZXNjIE1ldGhvZCB0aGF0IHJldHVybnMgdGhlIEFycmF5IG9mIG9iamVjdC4gV2lsbCBiZSBjYWxsZWQgaW5cbiAgICAgICAgICogICAgICAgQ29udHJvbGxlclxuICAgICAgICAgKiBAcmV0dXJucyB7T2JqZWN0fVxuICAgICAgICAgKi9cbiAgICAgICAgYWxidW1zRGF0YS5nZXREZXRhaWxzID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuICRodHRwLmdldCh1cmwpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBhbGJ1bXNEYXRhO1xuICAgIH1dKVxuIiwiLyoqXG4gKiBAbmFtZSBzdGFydEZyb21cbiAqIEBkZXNjIEN1c3RvbSBGaWx0ZXIgdGhhdCBkaXNwbGF5cyBpdGVtcyBiYXNlZCBvbiBwYWdpbmF0aW9uXG4gKiBAcmV0dXJucyB7QXJyYXl9XG4gKi9cblxuYW5ndWxhci5tb2R1bGUoJ2FwcCcpXG4gICAgLmZpbHRlcignc3RhcnRGcm9tJywgZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uKGlucHV0LCBzdGFydCkge1xuICAgICAgICAgICAgaWYgKCFpbnB1dCB8fCAhaW5wdXQubGVuZ3RoKSB7IHJldHVybjsgfVxuICAgICAgICAgICAgc3RhcnQgPSArc3RhcnQ7IC8vcGFyc2UgdG8gaW50XG5cbiAgICAgICAgICAgIHJldHVybiBpbnB1dC5zbGljZShzdGFydCk7XG4gICAgICAgIH1cbiAgICB9KTtcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
