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
      var url = "sendmessage_laundry.html";
     window.open(url, '_self');
  }
		});
     $(".js-form").trigger('reset');
    }).catch(function (error) {
      console.log(error);
    });
	

	});
  });
