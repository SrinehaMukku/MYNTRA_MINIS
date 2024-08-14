// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBUrXkmVJmnSx140butUW4vFAWgpeDHjd8",
  authDomain: "myntraminis.firebaseapp.com",
  projectId: "myntraminis",
  storageBucket: "myntraminis.appspot.com",
  messagingSenderId: "244274277005",
  appId: "1:244274277005:web:0711eb72118ed3d9de50c4",
  measurementId: "G-DLT75SNJMF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export{auth,app};
