"use strict";
require("./node_modules/angular/angular");
require("./node_modules/angular-route/angular-route");
var app = angular.module("myapp", ["ngRoute"]);
var homectrl = require("./controllers/homectrl");
var loginctrl = require("./controllers/loginctrl");
var adminctrl = require("./controllers/adminctrl");
var addpage = require("./controllers/addpage");
var updatepage = require("./controllers/updatepage");
var userview = require("./controllers/userview");
var userlist = require("./controllers/userlist");
var ownerinfo = require("./controllers/ownerinfo");
app.controller("homectrl", homectrl);
app.controller("loginctrl", loginctrl);
app.controller("adminctrl", adminctrl);
app.controller("addpage", addpage);
app.controller("updatepage", updatepage);
app.controller("userview", userview);
app.controller("userlist", userlist);
app.controller("ownerinfo", ownerinfo);
app.config(function($routeProvider,$locationProvider) {
    $routeProvider
    .when("/", {
        templateUrl : "./views/admin/page1.html",
        // controller: adminctrl.adminnewctrl
    })
    .when("/login", {
        templateUrl : "./views/login.html",
        controller: loginctrl.loginctrls
    })
    .when("/list", {
        templateUrl : "./views/admin/listscreen.html",
        controller: adminctrl.adminnewctrl
    })
    .when("/createtemplate", {
        templateUrl : "./views/admin/addpage.html",
        controller: addpage.addnewpage
    })
    .when("/updatetemplate/:id", {
        templateUrl : "./views/admin/addpage.html",
        controller: updatepage.updatethewpage
    })
    .when("/userlist", {
        templateUrl : "./views/users/userlist.html",
        controller: userlist.userviewlist
    })
    .when("/userview/:id", {
        templateUrl : "./views/users/userview.html",
        controller: userview.userviewing
    })
    .when("/owner/:id", {
        templateUrl : "./views/users/ownerinfo.html",
        controller: ownerinfo.owner
    })
      $locationProvider.hashPrefix("");
});
