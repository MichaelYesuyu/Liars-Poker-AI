// TODO: Replace with your project's config object. You can find this
// by navigating to your project's console overview page
// (https://console.firebase.google.com/project/your-project-id/overview)
// and clicking "Add Firebase to your web app"
var config = {
    apiKey: "AIzaSyDIguvH3NqDwhuNpO6CESQdv09t9qWQzlk",
    authDomain: "liarspoker-b0f12.firebaseapp.com",
    projectId: "liarspoker-b0f12",
    storageBucket: "liarspoker-b0f12.appspot.com",
};

// Initialize your Firebase app
firebase.initializeApp(config);

// Reference to your entire Firebase database
var myFirebase = firebase.database().ref();

// Get a reference to the recommendations object of your Firebase.
// Note: this doesn't exist yet. But when we write to our Firebase using
// this reference, it will create this object for us!
var boardsTest = myFirebase.child("boards_test");

// Push our first recommendation to the end of the list and assign it a
// unique ID automatically.
recommendations.push({
    "type":"test",
});