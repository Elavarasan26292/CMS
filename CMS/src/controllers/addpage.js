var services = require( "../services/mainservice" );
module.exports = {
addnewpage: ["$scope","$http","$location",function ( $scope,$http,$location) {
  $scope.webdatas={};
  $scope.rowdata=[{}];
$scope.addarow=function(){
  $scope.rowdata.push({});
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

$scope.submitpage=function(){
  $scope.webdatas.innercntnt=$scope.rowdata;
  console.log($scope.webdatas);
  services.createnew( $http, $scope.webdatas )
      .then( function ( result ) {
$location.path("/list");
      }).catch(function ( err ) {
        console.log( err.data )
      })
}

$scope.back=function(){
  $location.path("/list");
}
}]
}
