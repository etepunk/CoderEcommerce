import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
//import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCwXlBYcBXAEmQj7fC-SgZXzYVHNIuLmCQ",
  authDomain: "coderhouse-ecommerce-31ce1.firebaseapp.com",
  projectId: "coderhouse-ecommerce-31ce1",
  storageBucket: "coderhouse-ecommerce-31ce1.firebasestorage.app",
  messagingSenderId: "345283177813",
  appId: "1:345283177813:web:08803aa61c2acf0fbf93dc",
  measurementId: "G-X6V3MRHRTQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app); 

export default db;