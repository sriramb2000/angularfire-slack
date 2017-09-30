angular.module('lemonApp')
  .controller('SubjectsCtrl', function(schoolName, subjects, schoolId, $firebaseArray){
    var subjectsCtrl = this;
    subjectsCtrl.subjects = subjects;
    subjectsCtrl.schoolName = schoolName;

    subjectsCtrl.newSubject = {
      name:''
    };

    subjectsCtrl.createSubject = function(){
      subjectsCtrl.subjects.$add(subjectsCtrl.newSubject).then(function(){
        subjectsCtrl.newSubject = {
          name:''
        };
      });
    };
  });
