angular.module('lemonApp')
  .factory('Classes', function($firebaseArray){
    var classesRef = firebase.database().ref('classes');

    return{
      forSchoolSubject: function(schoolId, subjectId){
        var ref = classesRef.child(schoolId+'/'+subjectId);
        return $firebaseArray(ref);
      }
    };
  });
