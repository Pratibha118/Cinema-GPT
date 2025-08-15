// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBog93ObH-iwMq0SsmPYdtMm4eSkwqiINc",
  authDomain: "netflixgpt-1be54.firebaseapp.com",
  projectId: "netflixgpt-1be54",
  storageBucket: "netflixgpt-1be54.firebasestorage.app",
  messagingSenderId: "212708629264",
  appId: "1:212708629264:web:cb97015f696c187371a395",
  measurementId: "G-D59GMQELXD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();