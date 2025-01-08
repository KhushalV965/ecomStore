const fbAdmin = require('firebase-admin');
const serviceCredentials = require('../jetech-c0504-firebase-adminsdk-fyyh3-17d8f17db6.json');


fbAdmin.initializeApp({
    credential: fbAdmin.credential.cert(serviceCredentials),
    storageBucket: "jetech-c0504.firebasestorage.app"
})