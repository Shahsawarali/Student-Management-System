// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA-2bZV7OpPtQ0hHqyl7A6jnYpGEC4v5VY",
  authDomain: "student-management-syste-ce9fc.firebaseapp.com",
  projectId: "student-management-syste-ce9fc",
  storageBucket: "student-management-syste-ce9fc.appspot.com",
  messagingSenderId: "789102346151",
  appId: "1:789102346151:web:67597a74253a02f2a20082"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app)
export { db }