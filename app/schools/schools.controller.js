angular.module('lemonApp')
  .controller('SchoolsCtrl', function(schools, $firebaseArray, $state){
    var schoolsCtrl = this;
    schoolsCtrl.schools = schools;

    schoolsCtrl.newSchool = {
      name:''
    };

    schoolsCtrl.createSchool = function(){
      schoolsCtrl.schools.$add(schoolsCtrl.newSchool).then(function(){
        schoolsCtrl.newSchool = {
          name:''
        };
        $state.go('schools');
      });
    };

  });
