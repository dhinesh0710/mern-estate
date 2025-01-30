// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-4764c.firebaseapp.com",
  projectId: "mern-estate-4764c",
  storageBucket: "mern-estate-4764c.firebasestorage.app",
  messagingSenderId: "869134616488",
  appId: "1:869134616488:web:429fee35c60fdfceadff9d"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);