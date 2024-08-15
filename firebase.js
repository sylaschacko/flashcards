// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCta0ydT1-bhD6p7k_XFLGGfbJoFLwmBdY",
  authDomain: "flashcards-c17d0.firebaseapp.com",
  projectId: "flashcards-c17d0",
  storageBucket: "flashcards-c17d0.appspot.com",
  messagingSenderId: "650244568741",
  appId: "1:650244568741:web:4c1854fbd87dda1fb03f4c",
  measurementId: "G-HZQPLBTVD2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);