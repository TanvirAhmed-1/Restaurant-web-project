import { createContext, useEffect, useState } from "react";
import { app } from "../../firebase.init";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithPopup,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signOut,
  updateProfile,
} from "firebase/auth";

export const AuthContext = createContext(null);

const Authorization = ({ children }) => {
  const [users, setUsers] = useState(null);
  const [loader, setLoader] = useState(true);
  const auth = getAuth(app);
  const provider = new GoogleAuthProvider();

  // Register user with email
  const registerUser = (email, password) => {
    setLoader(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // Login with email
  const loginUser = (email, password) => {
    setLoader(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  // Login with Gmail
  const gmailUser = () => {
    setLoader(true);
    return signInWithPopup(auth, provider);
  };

  // Sign out
  const userSignOut = () => {
    setLoader(true);
    return signOut(auth);
  };

  // Update profile
  const userProfileUpdate = (profileData) => {
    return updateProfile(auth.currentUser, profileData);
  };

  // Listen to auth state changes
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUsers(currentUser);
      setLoader(false);
    });
    return () => unsubscribe();
  }, []);

  const authInfo = {
    users,
    loader,
    setLoader,
    registerUser,
    loginUser,
    gmailUser,
    userSignOut,
    userProfileUpdate,
    setUsers,
  };

  return (
    <AuthContext.Provider value={authInfo}>
      {children}
    </AuthContext.Provider>
  );
};

export default Authorization;
