// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB7ElagjDBXJKhSjjtUl38tja-PGP6Jpvk",
  authDomain: "student-accommodation-2.firebaseapp.com",
  projectId: "student-accommodation-2",
  storageBucket: "student-accommodation-2.appspot.com",
  messagingSenderId: "750740514804",
  appId: "1:750740514804:web:128920314f59ab95acbba1",
  measurementId: "G-GJFCZ62FFE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const auth = getAuth(app);
export default auth;