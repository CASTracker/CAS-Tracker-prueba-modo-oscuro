// firebase-app.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyCdtOXIjjB_kL34DhJSGuaT5OWzw2i_A2E",
  authDomain: "cas-tracker-dcfc4.firebaseapp.com",
  projectId: "cas-tracker-dcfc4",
  storageBucket: "cas-tracker-dcfc4.appspot.com",
  messagingSenderId: "782100915031",
  appId: "1:782100915031:web:cd74ba7defa78927951412",
  measurementId: "G-67K0LVYY2H"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
