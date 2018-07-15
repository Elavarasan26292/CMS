var services = require( "../services/mainservice" );
module.exports = {
updatethewpage: ["$scope","$http","$location","$routeParams",function ( $scope,$http,$location,$routeParams) {
$scope.rowdata=[];
  var data={"id":$routeParams.id};
  services.getpage( $http ,data)
      .then( function ( result ) {
        $scope.webdatas=result.data;
        $scope.rowdata=result.data.contents;
        console.log($scope.webdatas)
      }).catch(function ( err ) {
        console.log( err.data )
      })

    $scope.submitpage=function(){
      console.log($scope.webdatas);
      $scope.webdatas.innercntnt=$scope.rowdata;
      services.updatepage( $http ,$scope.webdatas)
          .then( function ( result ) {
            $location.path("/list");
          }).catch(function ( err ) {
            console.log( err.data )
          })
    }


$scope.addarow=function(){
  $scope.rowdata.push({})
}

$scope.back=function(){
  $location.path("/list");
}

    $scope.delsubcon=function(index){
      var temp=[];
      for(let i=0;i<$scope.rowdata.length;i++){
        if(i!=index){
          temp.push($scope.rowdata[i]);
        }
        if(i+1==$scope.rowdata.length){
          $scope.rowdata=temp;
        }
      }
    }
}]
}
