// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC3fpG0prrHbGadFm4FgQrUjQ7TUVvTg7E",
  authDomain: "student-management-syste-c700d.firebaseapp.com",
  projectId: "student-management-syste-c700d",
  storageBucket: "student-management-syste-c700d.appspot.com",
  messagingSenderId: "994798697796",
  appId: "1:994798697796:web:9518bb535413137a1ceb11"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app)
export { db }