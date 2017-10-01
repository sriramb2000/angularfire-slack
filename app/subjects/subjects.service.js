angular.module('lemonApp')
  .factory('Subjects', function($firebaseArray){
    var schoolSubjectsRef = firebase.database().ref('schoolSubjects');
    var classesRef = firebase.database().ref('classes');

    return{
      forSchool: function(schoolId){
        return $firebaseArray(schoolSubjectsRef.child(schoolId));
      }
    };
  });
