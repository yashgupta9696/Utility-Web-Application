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
		var url = "index.html";
     window.open(url, '_self');
    
	});
		$('#js-retrieve').click(function(){
		var url = "retrieve.html";
     window.open(url,'_blank');
});
});
	
	

