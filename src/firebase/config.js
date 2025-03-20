// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore/lite";
import firebase from "firebase/compat/app";
import { getEnvironments } from "../helpers";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

const env = getEnvironments();
console.log( env );
  // console.log( import.meta.env );

// Your web app's Firebase configuration

// Dev Prod
// const firebaseConfig = {
//   apiKey: "AIzaSyA8Wgb0bGiI8kc21iWeDZ0XJ-iXMhiHO7Q",
//   authDomain: "react-cursos-647ac.firebaseapp.com",
//   projectId: "react-cursos-647ac",
//   storageBucket: "react-cursos-647ac.firebasestorage.app",
//   messagingSenderId: "635607623928",
//   appId: "1:635607623928:web:bb82b147787283b67cf30d"
// };

//Testing
const firebaseConfig = {
  apiKey: "AIzaSyAYXtYnTN-GAt-t7vF093BXM00ku8GMX2c",
  authDomain: "react-app-j.firebaseapp.com",
  projectId: "react-app-j",
  storageBucket: "react-app-j.firebasestorage.app",
  messagingSenderId: "807219248799",
  appId: "1:807219248799:web:9ffc4810081b5e4213acaa"
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth( FirebaseApp );
export const FirebaseDB = getFirestore( FirebaseApp );