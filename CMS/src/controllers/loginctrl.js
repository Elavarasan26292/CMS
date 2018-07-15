var services = require( "../services/mainservice" );
module.exports = {
loginctrls: ["$scope","$http","$location",function ( $scope,$http,$location) {
$scope.user={};
$scope.login=function(){
  $scope.nulls=false;
  $scope.invld=false;
  if($scope.user.username==null || $scope.user.username==undefined){
    $scope.nulls=true;
  }
  console.log($scope.user);
  services.logins( $http, $scope.user )
			.then( function ( result ) {
if(result.data.allow=="ADMIN"){
  $location.path("/list");
}else if(result.data.allow=="USER"){
  $location.path("/userlist");
}else{
  $scope.invld=true;
}
      }).catch(function ( err ) {
				console.log( err.data )
			})

}
}]
}
