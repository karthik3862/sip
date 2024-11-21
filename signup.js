// signup.js
import { createUserWithEmailAndPassword, getAuth } from "https://www.gstatic.com/firebasejs/9.21.0/firebase-auth.js";
import { app } from "./firebaseconfig.js"; // Import the initialized Firebase app

const auth = getAuth(app);

// Get references to HTML elements
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const confirmPasswordInput = document.getElementById("confirmPassword");
const signupButton = document.getElementById("signupButton");

// Add event listener to the signup button
signupButton.addEventListener("click", (event) => {
  event.preventDefault();

  // Get input values
  const email = emailInput.value;
  const password = passwordInput.value;
  const confirmPassword = confirmPasswordInput.value;

  if (password !== confirmPassword) {
    alert("Passwords do not match!");
    return;
  }

  // Sign up with email and password
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // User successfully registered
      alert("Signup successful!");
      window.location.href = "login.html"; // Redirect to login page
    })
    .catch((error) => {
      alert("Error: " + error.message);
    });
});
