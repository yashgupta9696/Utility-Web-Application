"use strict";

$(function () {
  var config = {
    apiKey: "*",
    authDomain: "hostel-6e8c7.firebaseapp.com",
    databaseURL: "https://hostel-6e8c7.firebaseio.com",
    projectId: "hostel-6e8c7",
    storageBucket: "hostel-6e8c7.appspot.com",
    messagingSenderId: "692395961556"
  };
  firebase.initializeApp(config);
  
 var rootRef= firebase.database().ref();
 rootRef.on("child_added", function(snapshot) {
  var newPost = snapshot.val();
  var message= newPost.message;
  $("#table_body").append("<tr><td>"+message+"</td></tr>");
  
});
});
