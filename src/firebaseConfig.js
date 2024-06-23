import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const fbConfig = {
  apiKey: "AIzaSyBPHXEbDfaVCjNFOwvtp2EaaAhdNcE05No",
  authDomain: "eventease-409e9.firebaseapp.com",
  projectId: "eventease-409e9",
  storageBucket: "eventease-409e9.appspot.com",
  messagingSenderId: "604423668505",
  appId: "1:604423668505:web:d0a36f88cab394c9c2bb88",
};

const app = initializeApp(fbConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
