// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyALftuHsSEF8h7QjmWquEQTr9N2yKeBTTQ",
  authDomain: "food-recipe-client-f6709.firebaseapp.com",
  projectId: "food-recipe-client-f6709",
  storageBucket: "food-recipe-client-f6709.appspot.com",
  messagingSenderId: "601559365764",
  appId: "1:601559365764:web:096ad4d712f5802ef72ad1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app ;