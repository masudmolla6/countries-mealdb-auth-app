// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCT7vk91RSUi9Xe_saEY3aPO0iPwNzYNQY",
  authDomain: "countries-mealdb-auth-app.firebaseapp.com",
  projectId: "countries-mealdb-auth-app",
  storageBucket: "countries-mealdb-auth-app.appspot.com",
  messagingSenderId: "688291356986",
  appId: "1:688291356986:web:567e2413b0ffe6146d3003"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


export default app;