// src/firebase.js
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyACU_QLZEkCY9PzWjEkoIVLiuk-kAumOwM",
    authDomain: "loginsih-d8116.firebaseapp.com",
    databaseURL: "https://loginsih-d8116-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "loginsih-d8116",
    storageBucket: "loginsih-d8116.appspot.com",
    messagingSenderId: "138676938200",
    appId: "1:138676938200:web:af2675cb99025749c53ead",
    measurementId: "G-9YRMPV4JDN"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };