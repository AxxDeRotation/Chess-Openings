// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDQO5J3BDjNh--EkN8o7jmvtgGmcntEEVU",
  authDomain: "chess-openings-30a80.firebaseapp.com",
  projectId: "chess-openings-30a80",
  storageBucket: "chess-openings-30a80.appspot.com",
  messagingSenderId: "693303511452",
  appId: "1:693303511452:web:8b645d556493c7b6ed2059",
  measurementId: "G-VFEL43XY8H"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);