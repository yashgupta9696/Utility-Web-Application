"use strict";

$(function () {
  var config = {
    apiKey: "AIzaSyCXXwYXAo1lxabFRJLHeQjLRGZM34jqzs4",
    authDomain: "laundry-aa8bf.firebaseapp.com",
    databaseURL: "https://laundry-aa8bf.firebaseio.com",
    storageBucket: "laundry-aa8bf.appspot.com",
    messagingSenderId: "1092925656849"
    
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
		var url = "loginpage_laundry.html";
     window.open(url, '_self');
    
	});
$('#js-retrieve').click(function(){
		var url = "retrieve_laundry.html";
     window.open(url, '_blank');
    
	});
});
	
	
