angular.module('lemonApp')
  .controller('TeachersCtrl', function(teachers, subjectName, className, $firebaseArray, $stateParams){
    var teachersCtrl = this;
    teachersCtrl.teachers = teachers;
    teachersCtrl.subjectName = subjectName;
    teachersCtrl.className = className;
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
