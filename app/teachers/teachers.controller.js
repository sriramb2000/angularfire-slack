angular.module('lemonApp')
  .controller('TeachersCtrl', function(teachers, subjectName, $firebaseArray, $stateParams){
    var teachersCtrl = this;
    teachersCtrl.teachers = teachers;
    teachersCtrl.subjectName = subjectName;
    teachersCtrl.newTeacher = {
      name:''
    };

    teachersCtrl.createTeacher = function(){
      teachersCtrl.teachers.$add(teachersCtrl.newTeacher).then(function(){
        teachersCtrl.newTeacher = {
          name:''
        };
      });
    };
  });
