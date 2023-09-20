// src/firebase.js
import firebase from "firebase/app";
import "firebase/auth";

const firebaseConfig = {
  // Your Firebase config here
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
