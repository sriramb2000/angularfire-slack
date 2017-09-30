'use strict';

/**
 * @ngdoc overview
 * @name lemonApp
 * @description
 * # angularfireSlackApp
 *
 * Main module of the application.
 */
angular
  .module('lemonApp', [
    'firebase',
    'ui.router'
  ])
  .config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('schools', {
        url:'/',
        templateUrl:'/schools/index.html',
        controller:'SchoolsCtrl as schoolsCtrl',
        resolve: {
          schools: function(Schools){
            return Schools.$loaded();
          },
        }
      })
      .state('schools.create', {
        url:'create',
        templateUrl: 'schools/create.html',
        controller: 'SchoolsCtrl as schoolsCtrl'
      })
      .state('schools.subjects',{
        url: '{schoolId}/subjects',
        templateUrl: 'subjects/index.html',
        controller: 'SubjectsCtrl as subjectsCtrl',
        resolve:{
          subjects: function($stateParams, Subjects){
            return Subjects.forSchool($stateParams.schoolId).$loaded();
          },
          schoolName: function($stateParams, schools){
            return schools.$getRecord($stateParams.schoolId).name;
          },
          schoolId: ['$stateParams', function($stateParams){
            return $stateParams.schoolId;
          }]
        }
      })
      .state('schools.subjects.create',{
        url: '/create',
        templateUrl: 'subjects/create.html',
        controller: 'SubjectsCtrl as subjectsCtrl'
      })
      .state('schools.subjects.classes',{
        url: '^/{schoolId}/{subjectId}/classes',
        templateUrl: 'classes/index.html',
        controller: 'ClassesCtrl as classesCtrl',
        resolve:{
          classes: function($stateParams, Classes){
            return Classes.forSchoolSubject($stateParams.schoolId, $stateParams.subjectId).$loaded();
          },
          subjectName: function($stateParams, subjects){
            return subjects.$getRecord($stateParams.subjectId).name;
          }
        }
      })
      .state('schools.subjects.classes.create',{
        url: '/create',
        templateUrl: 'classes/create.html',
        controller: 'ClassesCtrl as subjectsCtrl'
      });

    $urlRouterProvider.otherwise('/');
  })
  .config(function(){
    var config = {
    apiKey: "AIzaSyCmd3rvnURbK877stU8w7FL-ELe7SRbXMY",
    authDomain: "lemonboardh.firebaseapp.com",
    databaseURL: "https://lemonboardh.firebaseio.com",
    projectId: "lemonboardh",
    storageBucket: "lemonboardh.appspot.com",
    messagingSenderId: "153189141062"
    };
    firebase.initializeApp(config);
  });
