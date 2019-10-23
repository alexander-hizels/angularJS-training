'use strict';

var view3 = angular.module('myApp.view3', ['ngRoute'])

  .config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/view3', {
      templateUrl: 'view3/view3.html',
      controller: 'View3Ctrl'
    });
  }])

  .controller('View3Ctrl', function ($scope) {
    $scope.hello = "Hello";
    $scope.question = {
      text: 'Какой js-фреймворк лучше использовать?',
      author: 'Иван Иванов',
      date: '20/10/2013',
      answers:
        [{
          text: 'AngularJS!',
          author: 'Вова Сидоров',
          date: '20/10/2013',
          rate: 2
        }, {
          text: 'AngularJS лучше всех',
          author: 'Олег Кузнецов',
          date: '21/10/2013',
          rate: 3
        }, {
          text: 'фигасе квестшен',
          author: 'Неизвестный',
          date: '22/10/2013',
          rate: 0
        }]
    };
  })

  .directive('answers', function () {
    return {
      scope: false,
      template: "<div>answers</div>",
      link: function (scope, element, attrs) {
        console.log('post scope', scope);
        console.log('post attrs', attrs);
      }
    };
  });


view3.directive('answers1', function () {
  return {
    scope: false,
    template: "<div>answers1{{data}}</div>",
    link: function (scope, element, attrs) {

      scope.data = scope[attrs["answer-list"] || attrs["title"]];
      console.log('answers1 scope', attrs.title);
      console.log('answers1 scope', scope);
      console.log('answers1 attrs', attrs);

    },
    restrict: "EACM"
  };
});