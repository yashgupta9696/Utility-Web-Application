"use strict";

$(function () {
  var config = {
   apiKey: "AIzaSyAyYpaxW36mggmqBrURVgKGLTzGi7NxOqg",
    authDomain: "hostel-6e8c7.firebaseapp.com",
    databaseURL: "https://hostel-6e8c7.firebaseio.com",
    projectId: "hostel-6e8c7",
    storageBucket: "hostel-6e8c7.appspot.com",
    messagingSenderId: "692395961556"
  };
  firebase.initializeApp(config);
  var state = {

    email: '',
    password: ''
  };
  $('.js-form').on('submit', function (event) {
   event.preventDefault();
    var email = $('#js-email').val() || state.email;
    var password = $('#js-password').val() || state.password;
    
    console.log(email, password);
    firebase.auth().signInWithEmailAndPassword(email, password).then(function (user) {
		firebase.auth().onAuthStateChanged(user => {
	if(user) {
      var url = "hostel_message.html";
     window.open(url, '_self');
  }
		});
     $(".js-form").trigger('reset');
    }).catch(function (error) {
      console.log(error);
    });
	

	});
  });
