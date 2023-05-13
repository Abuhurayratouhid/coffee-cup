// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDWNCF9rCtMfsL1YFCjyV6qWgTuW5MK8vk",
  authDomain: "coffee-cup-ecba4.firebaseapp.com",
  projectId: "coffee-cup-ecba4",
  storageBucket: "coffee-cup-ecba4.appspot.com",
  messagingSenderId: "839070875541",
  appId: "1:839070875541:web:66ff9656c54f31e2fe009c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;