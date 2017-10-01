angular.module('lemonApp')
  .factory('Teachers', function($firebaseArray){
    var ref = firebase.database().ref('schoolSubjects');

    return{
      forSubject: function(schoolId, subjectId){
        console.log($firebaseArray(ref.child(schoolId+'/'+subjectId+'/'+'teachers')));
        return $firebaseArray(ref.child(schoolId+'/'+subjectId+'/'+'teachers'));
      }
    };
  });
