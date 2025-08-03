// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDT-5FoECgtOQRDqKE5feMMY0eSSxmPzps",
  authDomain: "recipe-book-app-5cae7.firebaseapp.com",
  projectId: "recipe-book-app-5cae7",
  storageBucket: "recipe-book-app-5cae7.firebasestorage.app",
  messagingSenderId: "372633429980",
  appId: "1:372633429980:web:8c49b1c3a5d717a7e65119"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const  auth = getAuth(app);