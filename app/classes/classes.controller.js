angular.module('lemonApp')
  .controller('ClassesCtrl', function(classes, subjectName, $firebaseArray){
    var classesCtrl = this;
    classesCtrl.classes = classes;
    classesCtrl.subjectName = subjectName;

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
