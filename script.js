
// Reference to your entire Firebase database
var myFirebase = firebase.database();

// Get a reference to the recommendations object of your Firebase.
// Note: this doesn't exist yet. But when we write to our Firebase using
// this reference, it will create this object for us!
var boardsTest = myFirebase.child("boards_test");

// Push our first recommendation to the end of the list and assign it a
// unique ID automatically.
recommendations.push({
    "type":"test",
});