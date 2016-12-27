var app = angular.module('myApp', ['google-maps', 'ngRoute']);
app.config(['$routeProvider', function ($routeProvider) {
    $routeProvider
        .when('/home', {
        templateUrl: 'partials/home.html',
        controller: 'detailsController'
    })
        .when('/jen', {
        templateUrl: 'partials/jen.html',
        controller: 'chargesController'

    })
        .when('/amy', {
        templateUrl: 'partials/amy.html',
        controller: 'earningsController'
    })
        .when('/services', {
        templateUrl: 'partials/services.html',
        controller: 'earningsController'
    })
        .when('/form', {
        templateUrl: 'partials/form.html',
        controller: 'formController'
    })
        .when('/map', {
        templateUrl: 'partials/map.html',
        controller: 'mapController'
    })
        .otherwise({
        redirectTo: '/home'
    });

}]);

app.controller('navCtrl', function ($scope, $location) {
    $scope.isActive = function (viewLocation) {
        return viewLocation === $location.path();
    };

    $scope.classActive = function (viewLocation) {
        if ($scope.isActive(viewLocation)) {
            return 'active';
        } else {
            return 'inactive';
        }
    };
});

app.controller('mapController', ['$scope', function ($scope) {
    $scope.map = {
        control: {},
        center: {
            latitude: 42.091338,
            longitude: -70.708145
        },
        zoom: 14
    };

    $scope.marker = {
        center: {
            latitude: 42.091338,
            longitude: -70.708145
        }
    };

    $scope.infowindow = new google.maps.InfoWindow();

    $scope.show = false;

    $scope.showWindow = function() {
       if ($scope.marker) {
           $scope.show = true;
       } else {
           $scope.show = false;
       }
    };
}]);
