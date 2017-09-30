angular.module('lemonApp')
  .controller('ClassesCtrl', function(classes, subjectName, $firebaseArray, $stateParams){
    var classesCtrl = this;
    classesCtrl.classes = classes;
    classesCtrl.subjectName = subjectName;
    classesCtrl.schoolId = $stateParams.schoolId;
    classesCtrl.subjectId = $stateParams.subjectId;
    classesCtrl.newClass = {
      name:''
    };

    classesCtrl.createClass = function(){
      classesCtrl.classes.$add(classesCtrl.newClass).then(function(){
        classesCtrl.newClass = {
          name:''
        };
      });
    };
  });
