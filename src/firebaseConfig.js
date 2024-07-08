import { initializeApp } from "firebase/app";
import { getAuth,GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyCR9jN53tZ_7E9mAlEVF9QuQM-_9MPQ7RM",
  authDomain: "eventease-b980e.firebaseapp.com",
  projectId: "eventease-b980e",
  storageBucket: "eventease-b980e.appspot.com",
  messagingSenderId: "705124517810",
  appId: "1:705124517810:web:8f7e11a92bd27fbbae06ab",
  measurementId: "G-C7SJ6X52X5"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const provider=new GoogleAuthProvider();
export default {auth,provider,db};