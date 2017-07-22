"use strict";

$(function () {
  var config = {
    apiKey: "*",
    authDomain: "myauthdemo-7fc8c.firebaseapp.com",
    databaseURL: "https://myauthdemo-7fc8c.firebaseio.com",
    storageBucket: "myauthdemo-7fc8c.appspot.com",
    messagingSenderId: "258949061084"
  };
  firebase.initializeApp(config);
  
 var rootRef= firebase.database().ref();
 rootRef.on("child_added", function(snapshot) {
  var newPost = snapshot.val();
  var message= newPost.message;
  $("#table_body").append("<tr><td>"+message+"</td></tr>");
  
});
});
