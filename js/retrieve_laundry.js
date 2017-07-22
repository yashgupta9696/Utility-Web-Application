"use strict";

$(function () {
  var config = {
    apiKey: "*",
    authDomain: "laundry-aa8bf.firebaseapp.com",
    databaseURL: "https://laundry-aa8bf.firebaseio.com",
    storageBucket: "laundry-aa8bf.appspot.com",
    messagingSenderId: "1092925656849"
  };
  firebase.initializeApp(config);
  
 var rootRef= firebase.database().ref();
 rootRef.on("child_added", function(snapshot) {
  var newPost = snapshot.val();
  var message= newPost.message;
  $("#table_body").append("<tr><td>"+message+"</td></tr>");
  
});
});
