var app = angular.module('myApp', ['google-maps', 'ngRoute']);
app.config(['$routeProvider', function ($routeProvider) {
    $routeProvider
        .when('/home', {
        templateUrl: 'partials/home.html',
        controller: 'detailsController'
    })
        .when('/focus', {
        templateUrl: 'partials/focus.html',
        controller: 'chargesController'
    })
        .when('/team', {
        templateUrl: 'partials/team.html',
        controller: 'chargesController'
    })
        .when('/jen', {
        templateUrl: 'partials/jen.html',
        controller: 'chargesController'

    })
        .when('/services', {
        templateUrl: 'partials/services.html',
        controller: 'earningsController'
    })
        .when('/approach', {
        templateUrl: 'partials/approach.html',
        controller: 'serviceController'
    })
        .when('/form', {
        templateUrl: 'partials/form.html',
        controller: 'formController'
    })
        .otherwise({
        redirectTo: '/home'
    });

}]);

app.controller('navCtrl', ['$scope', function ($scope, $location) {
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
    
    $scope.show = false;
    $scope.showMenu = function () {
        if ($scope.myButton) {
            $scope.show = true;
        } else($scope.close = function () {
            $scope.show = false;
        });
};
}]);

app.controller('mapController', ['$scope', function ($scope) {
    $scope.map = {
        control: {},
        center: {
            latitude: 42.10574380000001,
            longitude: -70.74849940000001
        },
        zoom: 14
    };

    $scope.marker = {
        center: {
            latitude: 42.10574380000001,
            longitude: -70.74849940000001
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
