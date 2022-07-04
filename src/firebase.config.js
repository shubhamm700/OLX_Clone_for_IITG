// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDG2W9svlsb84z4KQynLwnd5R3IpLBHaOQ",
  authDomain: "olx-clone-for-iitg.firebaseapp.com",
  projectId: "olx-clone-for-iitg",
  storageBucket: "olx-clone-for-iitg.appspot.com",
  messagingSenderId: "832128137241",
  appId: "1:832128137241:web:3aad0bed0dc5c6ce2c1288",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore();
