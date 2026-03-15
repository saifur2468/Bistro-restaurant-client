// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC28muRVjDT3mX6g9oqNiOuMYSON26HC8s",
  authDomain: "bistro-boss-17795.firebaseapp.com",
  projectId: "bistro-boss-17795",
  storageBucket: "bistro-boss-17795.firebasestorage.app",
  messagingSenderId: "467980312927",
  appId: "1:467980312927:web:9a7cbe88ea58b261e816ea",
  measurementId: "G-JB9290RR8H"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export default app ;
export const provider = new GoogleAuthProvider();