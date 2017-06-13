var app = angular.module('myApp', ['google-maps', 'ngRoute']);
app.config(['$routeProvider', function ($routeProvider) {
    $routeProvider
        .when('/home', {
        templateUrl: 'partials/home.html',
        controller: 'navCtrl'
    })
        .when('/focus', {
        templateUrl: 'partials/focus.html',
        controller: 'navCtrl'
    })
        .when('/team', {
        templateUrl: 'partials/team.html',
        controller: 'navCtrl'
    })
        .when('/jen', {
        templateUrl: 'partials/jen.html',
        controller: 'navCtrl'
    })
        .when('/services', {
        templateUrl: 'partials/services.html',
        controller: 'navCtrl'
    })
        .when('/approach', {
        templateUrl: 'partials/approach.html',
        controller: 'navCtrl'
    })
        .when('/links', {
        templateUrl: 'partials/links.html',
        controller: 'navCtrl', 
    })
        .when('/form', {
        templateUrl: 'partials/form.html',
        controller: 'navCtrl', 
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
}]);