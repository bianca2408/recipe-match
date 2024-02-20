// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import {getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCigywXyJx2siKj584XECYAfatYnvcNC1Y",
  authDomain: "recipematch-5bb73.firebaseapp.com",
  projectId: "recipematch-5bb73",
  storageBucket: "recipematch-5bb73.appspot.com",
  messagingSenderId: "839692409483",
  appId: "1:839692409483:web:99669049298e6f2b7c928e",
  measurementId: "G-3HPRJ0GJBX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


export const auth = getAuth(app);
export default app