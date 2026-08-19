// ==========================================
// STAR PREPARATORY SCHOOL
// FIREBASE CONFIGURATION
// ==========================================

import { initializeApp } from
    "https://www.gstatic.com/firebasejs/12.1.0/firebase-app.js";

import { getAuth } from
    "https://www.gstatic.com/firebasejs/12.1.0/firebase-auth.js";

import { getFirestore } from
    "https://www.gstatic.com/firebasejs/12.1.0/firebase-firestore.js";


// ==========================================
// FIREBASE CONFIG
// ==========================================

const firebaseConfig = {

    apiKey: "AIzaSyAnafAfauEaxRrTRIWrfdLxHL7G5ET463Y",

    authDomain:
        "star-preparatory-upper-quiz.firebaseapp.com",

    projectId:
        "star-preparatory-upper-quiz",

    storageBucket:
        "star-preparatory-upper-quiz.firebasestorage.app",

    messagingSenderId:
        "763341549221",

    appId:
        "1:763341549221:web:cf77f2f9e227306550674c"
};


// ==========================================
// INITIALIZE FIREBASE
// ==========================================

const app = initializeApp(firebaseConfig);


// ==========================================
// FIREBASE SERVICES
// ==========================================

const auth = getAuth(app);

const db = getFirestore(app);


// ==========================================
// EXPORT
// ==========================================

export {
    app,
    auth,
    db
};