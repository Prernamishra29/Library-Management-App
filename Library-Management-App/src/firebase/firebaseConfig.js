// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase } from "firebase/database";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDefSubwreBoqAXqBeWXLOV32SL2Zt2kXg",
  authDomain: "library-management-app-f9584.firebaseapp.com",
  projectId: "library-management-app-f9584",
  storageBucket: "library-management-app-f9584.firebasestorage.app",
  messagingSenderId: "446253585566",
  appId: "1:446253585566:web:9613d9f94096bf4c5a578f",
  measurementId: "G-P4V510YWWR",
  databaseURL: "https://library-management-app-f9584-default-rtdb.firebaseio.com/"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;