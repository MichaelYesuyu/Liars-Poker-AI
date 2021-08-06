var firebaseConfig = {
  apiKey: "AIzaSyDIguvH3NqDwhuNpO6CESQdv09t9qWQzlk",
  authDomain: "liarspoker-b0f12.firebaseapp.com",
  databaseURL: "https://liarspoker-b0f12-default-rtdb.firebaseio.com",
  projectId: "liarspoker-b0f12",
  storageBucket: "liarspoker-b0f12.appspot.com",
  messagingSenderId: "243764177619",
  appId: "1:243764177619:web:dfbadde9ff87ed2f498226",
  measurementId: "G-9TTMMSQ0EG"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();
// Reference to your entire Firebase database
var myFirebase = firebase.database();
// Get a reference to the recommendations object of your Firebase.
// Note: this doesn't exist yet. But when we write to our Firebase using
// this reference, it will create this object for us!
var boardsTest = myFirebase.ref().child("boards_test");

const intervalId = window.setInterval(function(){console.log("we are still running weeeee")}, 1000);
// Push our first recommendation to the end of the list and assign it a
// unique ID automatically.
var email = "myemail@email.com"; 
var password = "mypassword";

/** 
firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
 console.log(error.code);
 console.log(error.message);
});
*/ 
firebase.auth().signInWithEmailAndPassword(email, password)
.then((userCredential) => {
  // Signed in
  var user = userCredential.user;
  console.log("hello")
  // ...
})
.catch((error) => {
    console.log("failed :(")
  var errorCode = error.code;
  var errorMessage = error.message;
});

firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/firebase.User
    var uid = user.uid;
    // ...
    console.log(uid)
  } else {
    // User is signed out
    // ...
  }
})