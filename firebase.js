// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: process.env.APIKEY,
//   authDomain: process.env.AUTHDOMAIN,
//   projectId: process.env.PROJECTID,
//   storageBucket: process.env.STORAGEBUCKET,
//   messagingSenderId: process.env.MESSAGINGSENDERID,
//   appId: process.env.APPID,
//   measurementId: process.env.MEASUREMENTID,
// };

const firebaseConfig = {
  apiKey: "AIzaSyBPX_QH_Qp5hGbWTsM0g8aQaGG2Pvc2ArI",
  authDomain: "flashcards-8bda5.firebaseapp.com",
  projectId: "flashcards-8bda5",
  storageBucket: "flashcards-8bda5.appspot.com",
  messagingSenderId: "105463351995",
  appId: "1:105463351995:web:8ed4af81722742d4b1779e",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { app, db };
