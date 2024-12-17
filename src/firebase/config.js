// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore/lite";
import firebase from "firebase/compat/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA8Wgb0bGiI8kc21iWeDZ0XJ-iXMhiHO7Q",
  authDomain: "react-cursos-647ac.firebaseapp.com",
  projectId: "react-cursos-647ac",
  storageBucket: "react-cursos-647ac.firebasestorage.app",
  messagingSenderId: "635607623928",
  appId: "1:635607623928:web:bb82b147787283b67cf30d"
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth( FirebaseApp );
export const FirebaseDB = getFirestore( FirebaseApp );