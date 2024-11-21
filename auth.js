// auth.js
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.21.0/firebase-auth.js";
import { app } from "./firebaseconfig.js"; // Import the initialized Firebase app

const auth = getAuth(app);

// Get references to HTML elements
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const signinButton = document.getElementById("signinButton");

// Add event listener to the sign-in button
signinButton.addEventListener("click", (event) => {
  event.preventDefault();

  // Get input values
  const email = emailInput.value;
  const password = passwordInput.value;

  // Sign in with email and password
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // User successfully logged in
      alert("Login successful!");
      window.location.href = "page1.html"; // Redirect to homepage
    })
    .catch((error) => {
      alert("Error: " + error.message);
    });
});
