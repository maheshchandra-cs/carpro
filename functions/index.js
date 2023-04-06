const functions = require("firebase-functions");
const admin = require("firebase-admin");
const express = require("express");
const cors = require("cors");
const app = express();


// Routes
app.get('/hello-world', (req, res) => {
    return req.status(200).send('Hello World!');
}); 

// Create - POST


// Read - GET


// Update - PUT


// Delete - Delete



// Export the api to Firebase Cloud Functions
exports.app = functions.https.onRequest(app);