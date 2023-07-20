// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCR1sS1Ck-ruPfWwv0nnvGa0moINLjH8L4",
    authDomain: "recipe-51587.firebaseapp.com",
    projectId: "recipe-51587",
    storageBucket: "recipe-51587.appspot.com",
    messagingSenderId: "285543228485",
    appId: "1:285543228485:web:4b6dc33c6b0d2ab2d16f2c"
  };

// Initialize Firebase & Firestore
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
