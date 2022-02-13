// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDFUxTv_EYha7Klh1Sl914GhDsu8C7hy-0",
  authDomain: "legit-logstore.firebaseapp.com",
  projectId: "legit-logstore",
  storageBucket: "legit-logstore.appspot.com",
  messagingSenderId: "809618414631",
  appId: "1:809618414631:web:468ac511e81115ab014202",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
