// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAVHRIiat6QDup19K0QZcvmhKjKFYguldQ",
  authDomain: "chrome-ext-90654.firebaseapp.com",
  projectId: "chrome-ext-90654",
  storageBucket: "chrome-ext-90654.appspot.com",
  messagingSenderId: "857425964887",
  appId: "1:857425964887:web:f5fbf81bb74c271eed5812"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db =getFirestore(app);