
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import {getFirestore} from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDQUmW-hsI1Ut-4yn0EiBrSemzKR1zh8do",
  authDomain: "instagram-50456.firebaseapp.com",
  projectId: "instagram-50456",
  storageBucket: "instagram-50456.appspot.com",
  messagingSenderId: "596687386911",
  appId: "1:596687386911:web:9eef74873eb3eee976d82a",
  measurementId: "G-S1WHZ1EXQ4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const firestore = getFirestore(app);
const storage = getStorage(app);

export {app,auth,firestore,storage};