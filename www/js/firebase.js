 // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyAEuF48liaoXkQHhTZEBEn-_XLXg475eSk",
    authDomain: "biblia-sagrada-arc.firebaseapp.com",
    databaseURL: "https://biblia-sagrada-arc.firebaseio.com",
    projectId: "biblia-sagrada-arc",
    storageBucket: "biblia-sagrada-arc.appspot.com",
    messagingSenderId: "97461857014",
    appId: "1:97461857014:web:4b282536c62c9e78299ad7",
    measurementId: "G-E02LPSLJZ8"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

  firebase.auth().signInAnonymously().catch(function(error) {
    var errorCode = error.code;
    var errorMessage = error.message;
    console.log(errorMessage)
  });