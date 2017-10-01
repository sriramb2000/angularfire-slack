angular.module('lemonApp')
  .factory('Messages', function($firebaseArray){
    var classMessages = firebase.database().ref('classMessages');

    return{
      forClass: function(classId){
        return $firebaseArray(classMessages.child(classId));
      }
    };
  });
