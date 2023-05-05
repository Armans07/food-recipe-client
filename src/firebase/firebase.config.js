// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDP2ZykrpAInsUjBUzUXrCz5vwcz8oGvrY",
  authDomain: "food-recipe-client-d6816.firebaseapp.com",
  projectId: "food-recipe-client-d6816",
  storageBucket: "food-recipe-client-d6816.appspot.com",
  messagingSenderId: "558951201356",
  appId: "1:558951201356:web:545e24d3301f437519d2e9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;