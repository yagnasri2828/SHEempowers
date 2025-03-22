import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-app.js";
import {
  getDatabase,
  ref,
  set,
} from "https://www.gstatic.com/firebasejs/10.11.0/firebase-database.js";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCOcZoEuISHz3QzpycIwGK4qwih2BvMkSY",
  authDomain: "cspyagna.firebaseapp.com",
  projectId: "cspyagna",
  storageBucket: "cspyagna.appspot.com",
  messagingSenderId: "950381360704",
  appId: "1:950381360704:web:5fd0d3663cc6e5d56651a5",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

// Function to submit the form
const contactForm = document.getElementById('contactForm');
contactForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const name = document.getElementById('name').value;
  const email = document.getElementById('emailid').value;
  const msgContent = document.getElementById('msgContent').value;

  // Save the form data to Firebase
  set(ref(database, 'reports/' + Date.now()), {
    name: name,
    email: email,
    message: msgContent
  })
  .then(() => {
    document.querySelector('.alert').style.display = 'block';
    setTimeout(() => {
      document.querySelector('.alert').style.display = 'none';
    }, 3000);
    contactForm.reset();
  })
  .catch((error) => {
    console.error("Error saving data: ", error);
  });
});