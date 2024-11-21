// firebaseConfig.js

// Import the functions you need from the SDKs you need
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.21.0/firebase-analytics.js";
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.21.0/firebase-app.js";

// Your Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDq7xO7nczEm0kWZvZbMCepWUPq-8S6B4M",
    authDomain: "website-27c35.firebaseapp.com",
    projectId: "website-27c35",
    storageBucket: "website-27c35.appspot.com",
    messagingSenderId: "584484654309",
    appId: "1:584484654309:web:c73d947a42f6bd8e5a180c",
    measurementId: "G-YQ6FK596X2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Export the app to be used in other files
export { analytics, app };

