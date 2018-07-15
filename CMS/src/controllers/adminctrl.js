var services = require( "../services/mainservice" );
module.exports = {
adminnewctrl: function ( $scope,$location,$http) {
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

$scope.createnew=function(){
  $location.path("/createtemplate");
}

$scope.editing=function(id){
  $location.path("/updatetemplate/"+id);
}

$scope.deleting=function(id){
  let data={
    "id":id
  }
  services.delpage( $http,data )
      .then( function ( result ) {
        lists();
      }).catch(function ( err ) {
        console.log( err.data )
      })
}

$scope.logout=function(){
  $location.path("/login");
}
}
}
