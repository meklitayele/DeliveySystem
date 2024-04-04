import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyDyzdG0ed1uPW_MJPjvc4rF1-nQ8nuEJ9A",
  authDomain: "deliveryservice-80946.firebaseapp.com",
  projectId: "deliveryservice-80946",
  storageBucket: "deliveryservice-80946.appspot.com",
  messagingSenderId: "706874356620",
  appId: "1:706874356620:web:4b6e5fcf78e75341709ca9"
};


const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(); // Get the auth instance directly

export { app, analytics, auth };