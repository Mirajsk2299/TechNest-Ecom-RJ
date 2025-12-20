import { createContext, useContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  sendPasswordResetEmail,
} from "firebase/auth";
import { doc, setDoc, getDoc } from "firebase/firestore";
import { auth, db } from "../firebase";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);

  // ---------------------------
  // REGISTER USER
  // ---------------------------
  const register = async (fullName, email, address, password) => {
    const result = await createUserWithEmailAndPassword(auth, email, password);

    // Save extra data in firestore
    await setDoc(doc(db, "users", result.user.uid), {
      fullName,
      email,
      address,
    });

    return result;
  };

  // -----------------------------------------
  // Reset Password

  const resetPassword = async (email) => {
    return await sendPasswordResetEmail(auth, email);
  };

  // ------------------------------------------------

  // ---------------------------
  // LOGIN USER
  // ---------------------------
  const login = async (email, password) => {
    return await signInWithEmailAndPassword(auth, email, password);
  };

  // ---------------------------
  // LOGOUT USER
  // ---------------------------
  const logout = async () => {
    await signOut(auth);
    setUserData(null);
    setCurrentUser(null);
    window.location.reload();
    // alert("Logged out successfully");
  };

  // ---------------------------
  // FETCH USER DATA FROM FIRESTORE
  // ---------------------------
  const fetchUserData = async (uid) => {
    const docRef = doc(db, "users", uid);
    const snapshot = await getDoc(docRef);

    if (snapshot.exists()) {
      setUserData(snapshot.data());
    }
  };

  // ---------------------------
  // LISTEN TO LOGIN/LOGOUT STATE
  // ---------------------------
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      setCurrentUser(user);

      if (user) {
        await fetchUserData(user.uid);
      } else {
        setUserData(null);
      }

      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  // ---------------------------
  // CONTEXT VALUES
  // ---------------------------
  return (
    <AuthContext.Provider
      value={{
        currentUser,
        userData,
        loading,
        register,
        login,
        logout,
        sendPasswordResetEmail,
        resetPassword,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
