var baseUrl="http://localhost:3000/";
var mainservice = {
  logins: function (  $http,userdata ) {
    console.log("user",userdata)
  		return $http( {
  			method: 'POST',
  			url: baseUrl + 'loginapp/' ,
        headers: {
					'Content-Type': 'application/json'
				},
  			data: userdata
  		} )
  	},
    createnew: function (  $http,userdata ) {
      console.log("user",userdata)
        return $http( {
          method: 'POST',
          url: baseUrl + 'createpage/' ,
          headers: {
            'Content-Type': 'application/json'
          },
          data: userdata
        } )
      },

      updatepage: function (  $http,userdata ) {
        console.log("user",userdata)
          return $http( {
            method: 'POST',
            url: baseUrl + 'updatepage/' ,
            headers: {
              'Content-Type': 'application/json'
            },
            data: userdata
          } )
        },

        likepage: function (  $http,userdata ) {
          console.log("user",userdata)
            return $http( {
              method: 'POST',
              url: baseUrl + 'likethepage/' ,
              headers: {
                'Content-Type': 'application/json'
              },
              data: userdata
            } )
          },

      datalist: function (  $http ) {
          return $http( {
            method: 'GET',
            url: baseUrl + 'pagelist/' ,
            headers: {
              'Content-Type': 'application/json'
            }
          } )
        },

        delpage: function (  $http,userdata ) {
            return $http( {
              method: 'POST',
              url: baseUrl + 'deletepage/' ,
              headers: {
                'Content-Type': 'application/json'
              },
              data: userdata
            } )
          },

          getpage: function (  $http,userdata ) {
              return $http( {
                method: 'POST',
                url: baseUrl + 'getdocument/' ,
                headers: {
                  'Content-Type': 'application/json'
                },
                data: userdata
              } )
            },
};
module.exports = mainservice;
