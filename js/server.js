var express = require('express');
var bodyParser = require('body-parser')

var app = express();

var port = process.env.PORT || 8000

app.use(express.static('public'));
app.get('/test', function(req,res){
  console.log("get request test was reached")
  res.render("../indexTest")
});
app.get("/loadGame",function(req,res){
  res.writeHead(302,{Location: 'https://michaelyesuyu.github.io/Liars-Poker-AI/loadGame.html'});
  return res.end();
});

app.get('/testLoad', function(req,res) {
  console.log("we are inside the test load redirect")
  res.render("internal")
});

/***
 * My logic here is that we should have the users in game ping the backend once every second or so to get game updates 
 * a much more ideal way to set this up would be to setup some sort of web client but that is gonna take a lot of work so I'm
 * just thinking that doing it the lazy way of asking for an update packet is better 
 */
app.get('/getGameUpdates',function(req, res){

});

app.get('/',function(req,res){
  console.log("we are inside the general redirect")
  res.render("indexTest")
  return res.end();
});

var admin = require('firebase-admin');

// function initialzeApp(){
//     let firebaseConfig = {
//       apiKey: "AIzaSyDIguvH3NqDwhuNpO6CESQdv09t9qWQzlk",
//       authDomain: "liarspoker-b0f12.firebaseapp.com",
//       databaseURL: "https://liarspoker-b0f12-default-rtdb.firebaseio.com",
//       projectId: "liarspoker-b0f12",
//       storageBucket: "liarspoker-b0f12.appspot.com",
//       messagingSenderId: "243764177619",
//       appId: "1:243764177619:web:dfbadde9ff87ed2f498226",
//       measurementId: "G-9TTMMSQ0EG"
//     };
//     // Initialize Firebase
//     firebase.initializeApp(firebaseConfig);
//     firebase.analytics();
//   }
  
//   if (firebase.apps.length === 0) {
//     initialzeApp()
//   }
//   // Reference to your entire Firebase database
//   var myFirebase = firebase.database();
//   // we should probably create a boards and a boards_test database entry 
//   var boardsTest = myFirebase.ref().child("boards_test");
  
//   // Push our first recommendation to the end of the list and assign it a
//   // unique ID automatically.
//   var email = "myemail@email.com";
//   var password = "mypassword";
  
//   var user = null; 
  
//   function createUserWithUsernameAndPassword(username, password) {
//     let email = username + '@email.com'
//     firebase.auth().createUserWithEmailAndPassword(email, password).then(()=>{
//       console.log("sucessfully created user, signing in now")
//       loginUserWithUsernameAndPassword(username,password)
//       //switch location after this? 
//     }).catch(function (error) {
//       console.log(error.code);
//       console.log(error.message);
//       //alert("issue #1: Signup broke, dm Vijay or Michael")
//     });
  
//   }
  
//   function loginUserWithUsernameAndPassword(username, password) {
//     let email = username + '@email.com'
  
//     firebase.auth().signInWithEmailAndPassword(email, password)
//       .then((userCredential) => {
//         // Signed in
//         user = userCredential.user;
//         console.log("hello")
//         // ...
//       })
//       .catch((error) => {
//         console.log("failed :(")
//         var errorCode = error.code;
//         var errorMessage = error.message;
//       });
//   }
  
//   function signOut(){
//     firebase.auth().signOut().then(function() {
//       console.log('Signed Out');
//     }, function(error) {
//       console.error('Sign Out Error', error);
//     });
//   }
  
//   firebase.auth().onAuthStateChanged((user) => {
//     if (user) {
//       // User is signed in, see docs for a list of available properties
//       // https://firebase.google.com/docs/reference/js/firebase.User
//       var uid = user.uid;
//       // ...
//       console.log("user is signed in")
//     } else {
//       // User is signed out
//       // ...
//       console.log("user is signed out")
//     }
//   })
  
//   function randomString(length, chars) {
//     var result = '';
//     for (var i = length; i > 0; --i) result += chars[Math.floor(Math.random() * chars.length)];
//     return result;
//   }
  
//   function joinGame(gameCode){
//     alert(`Game Code: ${gameCode}`)
    
//   }
  
//   function newDeck(){
    
//   }
  
//   function createGame(){
//     alert('Creating Game')
//     // Write the new post's data simultaneously in the posts list and the user's post list.
//     var updates = {};
//     updates['/posts/' + newPostKey] = postData;
//     updates['/user-posts/' + uid + '/' + newPostKey] = postData;
  
//     return firebase.database().ref().update(updates);
  
//   }

  app.listen(port,()=>{
    console.log("running");
  });