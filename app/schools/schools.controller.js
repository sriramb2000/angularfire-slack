angular.module('lemonApp')
  .controller('SchoolsCtrl', function(schools, $firebaseArray, $state){
    var schoolsCtrl = this;
    schoolsCtrl.schools = schools;

    schoolsCtrl.newSchool = {
      name:''
    };

    schoolsCtrl.search = '';

    schoolsCtrl.createSchool = function(){
      schoolsCtrl.schools.$add(schoolsCtrl.newSchool).then(function(){
        schoolsCtrl.newSchool = {
          name:''
        };
        $state.go('schools');
      });
    };
    schoolsCtrl.searchSchoolsn = function(){
      var temp = schoolsCtrl.schools.length;
			var sumting = schoolsCtrl.search;
      angular.forEach(schoolsCtrl.schools, function(school){
        var rip = school.name.substring(0, sumting.length);
        var areEqual = rip.toUpperCase() === sumting.toUpperCase();
        if(areEqual){
          document.getElementById(school.$id).style.display = "inline-block";
        } else {
          document.getElementById(school.$id).style.display = "none";
        }
      })
		}
  });
