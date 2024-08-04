// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC3_piLMu-80uAlyq6TtMMj6AHs2SCxuKk",
  authDomain: "pantry-tracker-1038d.firebaseapp.com",
  projectId: "pantry-tracker-1038d",
  storageBucket: "pantry-tracker-1038d.appspot.com",
  messagingSenderId: "13951134762",
  appId: "1:13951134762:web:1521e8d1396a7e70b52753"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);