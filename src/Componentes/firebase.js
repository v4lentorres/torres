// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDPdxaTwuB043OacLgPlVvX4O9rGFRXYiY",
  authDomain: "torres-fb-auth.firebaseapp.com",
  projectId: "torres-fb-auth",
  storageBucket: "torres-fb-auth.appspot.com",
  messagingSenderId: "208507903194",
  appId: "1:208507903194:web:bfd030f55b4826b9de99e3"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app) 