angular.module('lemonApp')
  .factory('Schools',function($firebaseArray){
    var ref = firebase.database().ref('schools');
    var schools = $firebaseArray(ref);
    return schools;
  });
