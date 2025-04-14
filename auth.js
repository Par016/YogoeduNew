// Import Firebase modules
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut
} from "https://www.gstatic.com/firebasejs/9.6.1/firebase-auth.js";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCY_mvuc9hudIZm7lsCr4S-Eo9eyb2grsM",
  authDomain: "yogo-22673.firebaseapp.com",
  projectId: "yogo-22673",
  storageBucket: "yogo-22673.appspot.com",
  messagingSenderId: "934952882321",
  appId: "1:934952882321:web:8b881536116e8c05bbef30",
  measurementId: "G-QTQHYT5M6Z"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Sign Up Function
export function signUp(email, password) {
  return createUserWithEmailAndPassword(auth, email, password);
}

// Log In Function
export function logIn(email, password) {
  return signInWithEmailAndPassword(auth, email, password);
}

// Check User Login Status
export function checkUser(callback) {
  onAuthStateChanged(auth, callback);
}

// Log Out Function
export function logOut() {
  return signOut(auth);
}
