"use strict";

$(function () {
  var config = {
    apiKey: "*",
    authDomain: "*",
    databaseURL: "https://hostel-6e8c7.firebaseio.com",
    projectId: "hostel-6e8c7",
    storageBucket: "hostel-6e8c7.appspot.com",
    messagingSenderId: "692395961556"
    
  };
  firebase.initializeApp(config);
  $('.js-form').on('submit', function (event) {
    event.preventDefault();
    var message = $('#js-message').val();
    console.log(message);
	
      firebase.database().ref().push({
        message: message
      });
      $(".js-form").trigger('reset');
    })
		$('#js-back').click(function(){
		var url = "hostel_login.html";
     window.open(url, '_self');
    
	});
$('#js-retrieve').click(function(){
		var url = "retrieve_hostel.html";
     window.open(url, '_blank');
    
	});
});
	
	
