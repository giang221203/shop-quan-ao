// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA1jl54-13jDaX0GuPSACKJvUQzJwklFpk",
  authDomain: "bazarapp-76583.firebaseapp.com",
  projectId: "bazarapp-76583",
  storageBucket: "bazarapp-76583.appspot.com",
  messagingSenderId: "412658156778",
  appId: "1:412658156778:web:1d56ca515d933e8d71c393",
  measurementId: "G-0N6ET2GPKY"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);