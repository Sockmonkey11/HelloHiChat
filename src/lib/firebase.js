import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth"
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
const firebaseConfig = {
  apiKey:"AIzaSyCbBFfHCm5lFlUuVbd8I2RavUUADN5lRos",
  authDomain: "messenger-cb3f8.firebaseapp.com",
  projectId: "messenger-cb3f8",
  storageBucket: "messenger-cb3f8.firebasestorage.app",
  messagingSenderId: "664469539207",
  appId: "1:664469539207:web:1c5ae46bb16a8e4c94eb22",
  measurementId: "G-95J6LCJBQZ"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
export const db = getFirestore();
export const storage = getStorage();