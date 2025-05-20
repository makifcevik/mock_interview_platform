import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAIIAi54M7CEeXf2-IcOiBrlQxBvghgyvw",
  authDomain: "prepwise-5051f.firebaseapp.com",
  projectId: "prepwise-5051f",
  storageBucket: "prepwise-5051f.firebasestorage.app",
  messagingSenderId: "73208237675",
  appId: "1:73208237675:web:2f4467432b14a907dfab2e",
  measurementId: "G-7V3ZNM7M12",
};

// Initialize Firebase
const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);
export const db = getFirestore(app);
