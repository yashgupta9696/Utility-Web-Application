"use strict";

$(function () {
  var config = {
    apiKey: "AIzaSyBmRUFvA9XGzOOlL8EFEZrqNSaojAI_rHw",
    authDomain: "myauthdemo-7fc8c.firebaseapp.com",
    databaseURL: "https://myauthdemo-7fc8c.firebaseio.com",
    storageBucket: "myauthdemo-7fc8c.appspot.com",
    messagingSenderId: "258949061084"
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
      var url = "sendmessage.html";
     window.open(url, '_self');
  }
		});
     $(".js-form").trigger('reset');
    }).catch(function (error) {
      console.log(error);
    });
	

	});
  });
