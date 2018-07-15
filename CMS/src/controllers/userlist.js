var services = require( "../services/mainservice" );
module.exports = {
userviewlist: ["$scope","$http","$location",function ( $scope,$http,$location) {
  function lists(){
  services.datalist( $http )
      .then( function ( result ) {
        console.log(result.data)
        $scope.listdata=result.data;
      }).catch(function ( err ) {
        console.log( err.data )
      })
    }
    lists();

$scope.likepage=function(id){
  var data={"id":id}
  services.likepage( $http,data )
      .then( function ( result ) {
        lists();
      }).catch(function ( err ) {
        console.log( err.data )
      })
}

    $scope.viewpage=function(id){
      $location.path("/userview/"+id);
    }

    $scope.logout=function(){
      $location.path("/login");
    }
}]
}
