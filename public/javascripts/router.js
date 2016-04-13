/**
 * Created by Freeman on 2016/4/12.
 */
angular.module('NAChat').config(function ($routeProvider,$locationProvider) {
   /* $locationProvider.html5Mode({
        enabled: true,
        requireBase: false
    });*/
    $routeProvider.
    when('/',{
        templateUrl: '/pages/room.html',
        controller: 'RoomCtrl'
    }).
    when('/login',{
        templateUrl: '/pages/login.html',
        controller: 'LoginCtrl'
    }).
    otherwise({
        redirectTo: '/login'
    })
    
});