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
    // $scope.searchSchoolsn = function(){
    //   var temp = $scope.dschools.length;
		// 	var sumting = $scope.search;
    //   for(var i = 0; i < temp; i++){
		// 		var rip = $scope.dschools[i].substring(0, sumting.length);
		// 		var areEqual = rip.toUpperCase() === sumting.toUpperCase();
		// 		if(areEqual){
		// 			document.getElementById(i + 1).style.display = "inline-block";
    //
		// 		}else {
		// 			document.getElementById(i + 1).style.display = "none";
    //
		// 		}
		// 	}
		// }
  });
