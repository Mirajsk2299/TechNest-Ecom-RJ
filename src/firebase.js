import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCAwTxKOqITZNlRzrWEEWlE1hkH2DDdmS0",
  authDomain: "technest-login-43e22.firebaseapp.com",
  projectId: "technest-login-43e22",
  storageBucket: "technest-login-43e22.firebasestorage.app",
  messagingSenderId: "705828651472",
  appId: "1:705828651472:web:df13e732282693368db9d5",
  databaseURL: "https://technest-login-43e22-default-rtdb.firebaseio.com",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
