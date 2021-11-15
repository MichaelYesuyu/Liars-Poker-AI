
function initialzeApp() {
  let firebaseConfig = {
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
}


if (firebase.apps.length === 0) {
  initialzeApp()
  var a = 0
  var b = 3
}
// Reference to your entire Firebase database
var myFirebase = firebase.database();
// we should probably create a boards and a boards_test database entry 
var boardsTest = myFirebase.ref().child("boards_test");
console.log("we are here")
console.log(boardsTest)

// Push our first recommendation to the end of the list and assign it a
// unique ID automatically.
var email = "myemail@email.com";
var password = "mypassword";

var user = null;

function createUserWithUsernameAndPassword(username, password) {
  let email = username + '@email.com'
  firebase.auth().createUserWithEmailAndPassword(email, password).then(() => {
    console.log("sucessfully created user, signing in now")
    loginUserWithUsernameAndPassword(username, password)
    //switch location after this? 
  }).catch(function (error) {
    console.log(error.code);
    console.log(error.message);
    //alert("issue #1: Signup broke, dm Vijay or Michael")
  });

}

function loginUserWithUsernameAndPassword(username, password) {
  let email = username + '@email.com'

  firebase.auth().signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
      // Signed in
      user = userCredential.user;
      console.log("hello")
      // ...
    })
    .catch((error) => {
      console.log("failed :(")
      var errorCode = error.code;
      var errorMessage = error.message;
    });
}

function signOut() {
  firebase.auth().signOut().then(function () {
    console.log('Signed Out');
  }, function (error) {
    console.error('Sign Out Error', error);
  });
}

firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/firebase.User
    var uid = user.uid;
    // ...
    console.log("user is signed in")
  } else {
    // User is signed out
    // ...
    console.log("user is signed out")
  }
})

function randomString(length, chars) {
  var result = '';
  for (var i = length; i > 0; --i) result += chars[Math.floor(Math.random() * chars.length)];
  return result;
}

/**
 * This function is for the serverless implementation? The thing is do I just wnat to do the server based impl
 * That will be tougher to set up for sure, but I think it will be worth it in the end because our end goal with this is to do some ai stuff
 * @param gameCode user inputed code the identifies the game they want to join 
 */
function joinGame(gameCode) {
  alert(`Game Code: ${gameCode}`)
}
function newDeck() {
  // do I do this here, also how do I want to store the deck? 
}
function createGame() {
  alert('Creating Game')
  boardsTest.push({
    "type":"test",
  });
}