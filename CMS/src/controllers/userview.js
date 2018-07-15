var services = require( "../services/mainservice" );
module.exports = {
userviewing: ["$scope","$http","$routeParams","$location",function ( $scope,$http,$routeParams,$location) {
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

    $scope.changecont=function(id){
      $scope.subtitles=$scope.pagedata.contents[id].subtitle;
      $scope.descriptionss=$scope.pagedata.contents[id].description;
    }

    $scope.back=function(){
      $location.path("/userlist")
    }

    $scope.owners=function(){
      $location.path("/owner/"+$routeParams.id)
    }
}]
}
