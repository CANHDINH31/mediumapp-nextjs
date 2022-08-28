// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyALHWc3AMG0aHlN1GAnX73H5FO1fOG6TZ8",
  authDomain: "nextjs-684cf.firebaseapp.com",
  projectId: "nextjs-684cf",
  storageBucket: "nextjs-684cf.appspot.com",
  messagingSenderId: "601647300322",
  appId: "1:601647300322:web:5551d9281f73bbd7aa68bb",
  measurementId: "G-8YSPWLXZZW",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const db = getFirestore(app);

export { auth, provider, db };
