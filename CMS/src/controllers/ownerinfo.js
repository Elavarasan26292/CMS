var services = require( "../services/mainservice" );
module.exports = {
owner: ["$scope","$http","$location","$routeParams",function ( $scope,$http,$location,$routeParams) {
  var data={"id":$routeParams.id};
  services.getpage( $http ,data)
      .then( function ( result ) {
        $scope.pagedata=result.data;
        $scope.subtitles=$scope.pagedata.contents[0].subtitle;
        $scope.descriptionss=$scope.pagedata.contents[0].description;
        console.log($scope.pagedata)
      }).catch(function ( err ) {
        console.log( err.data )
      })

$scope.okfun=function(){
  $location.path("userview/"+$routeParams.id)
}
}]
}
