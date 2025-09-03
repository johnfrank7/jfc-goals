import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBTPcE1G_tVZdQeQWsbfVHzjVpEOlECxZ4",
  authDomain: "jfc-goals.firebaseapp.com",
  projectId: "jfc-goals",
  storageBucket: "jfc-goals.firebasestorage.app",
  messagingSenderId: "528883077998",
  appId: "1:528883077998:web:f9112a84d787a23311e77f"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);