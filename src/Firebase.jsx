// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBv15YjyZzzU2fh3LKShsfHz5OkdczHDzM",
  authDomain: "e-comm4441.firebaseapp.com",
  projectId: "e-comm4441",
  storageBucket: "e-comm4441.appspot.com",
  messagingSenderId: "582095943515",
  appId: "1:582095943515:web:d74a4bab882e8d37be8c7e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth=getAuth();
export default app;