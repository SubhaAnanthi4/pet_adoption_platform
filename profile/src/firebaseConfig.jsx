// firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

// Your Firebase config object
const firebaseConfig = {
    apiKey: "AIzaSyDou5bQ_SMlmRyw26hQpY2j-g8cYETUJSE",
    authDomain: "pet-adoption-platform-63cb4.firebaseapp.com",
    projectId: "pet-adoption-platform-63cb4",
    storageBucket: "pet-adoption-platform-63cb4.appspot.com",
    messagingSenderId: "367320743188",
    appId: "1:367320743188:web:d65ddd34ae4f9a86c65601",
    measurementId: "G-DDW65RP5YN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Initialize Google Auth Provider
const googleProvider = new GoogleAuthProvider();

// Exporting auth and googleProvider
export { auth, googleProvider };



