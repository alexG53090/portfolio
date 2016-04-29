var app = angular.module('portfolio', ['ngRoute'])

app.config(function($routeProvider){
   $routeProvider
    .when('/yoo', {
    templateUrl: 'blog.ejs',
    controller: 'HomeController'
  })
})
