// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAdcjUzeW7z81GzRShFfjgHm5lEwHCCH70",
  authDomain: "kyurasi-fc.firebaseapp.com",
  projectId: "kyurasi-fc",
  storageBucket: "kyurasi-fc.appspot.com",
  messagingSenderId: "138680622086",
  appId: "1:138680622086:web:5005de92e3735d1112f787",
  measurementId: "G-YDECPVBNSE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);