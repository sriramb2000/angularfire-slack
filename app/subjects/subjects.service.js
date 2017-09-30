angular.module('lemonApp')
  .factory('Subjects', function($firebaseArray){
    var schoolSubjectsRef = firebase.database().ref('schoolSubjects');

    return{
      forSchool: function(schoolId){
        return $firebaseArray(schoolSubjectsRef.child(schoolId));
      }
    };
  });
