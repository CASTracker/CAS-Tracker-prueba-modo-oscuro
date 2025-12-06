// firebase-auth.js
import { auth } from "./firebase-app.js";
import { 
  createUserWithEmailAndPassword, 
  signInWithEmailAndPassword, 
  onAuthStateChanged, 
  signOut 
} from "https://www.gstatic.com/firebasejs/11.0.1/firebase-auth.js";

const registerForm = document.getElementById("registerForm");
const loginForm = document.getElementById("loginForm");
const logoutBtn = document.getElementById("logoutBtn");

if (registerForm) {
  registerForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    const email = document.getElementById("registerEmail").value;
    const password = document.getElementById("registerPassword").value;
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      alert("Cuenta creada correctamente ✅");
      window.location.href = "menu.html";
    } catch (error) {
      alert("Error: " + error.message);
    }
  });
}

if (loginForm) {
  loginForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    const email = document.getElementById("loginEmail").value;
    const password = document.getElementById("loginPassword").value;
    try {
      await signInWithEmailAndPassword(auth, email, password);
      window.location.href = "menu.html";
    } catch (error) {
      alert("Error: " + error.message);
    }
  });
}

if (logoutBtn) {
  logoutBtn.addEventListener("click", async () => {
    await signOut(auth);
    window.location.href = "index.html";
  });
}

// Detectar si hay usuario logueado o no
onAuthStateChanged(auth, (user) => {
  if (!user) {
    // if not on index, redirect
    if (!window.location.href.includes("index.html") && !window.location.href.endsWith("/")) {
      window.location.href = "index.html";
    }
  }
});
