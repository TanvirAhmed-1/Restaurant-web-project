import { createContext, useEffect, useState } from "react";
import { app } from "../../firebase.init";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";

export const AuthContext = createContext(null);

const Authorization = ({ children }) => {
  const [users, setUsers] = useState(null);
  const [loader, setLoader] = useState(true);
  const auth = getAuth(app);
  //email login
  const emailUserLogin = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  //Gmail user login
  const provider = new GoogleAuthProvider();
  const gmailUser = () => {
    setLoader(true)
    return signInWithPopup(auth, provider);
  };
  //user signout
  const userSignOut=()=>{
    signOut(auth)
  }

  const authInfo = {
    emailUserLogin,
    gmailUser,
    loader, 
    setLoader,
    users,
    setUsers,
    userSignOut
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUsers(currentUser);
    });
    return () => {
      unsubscribe();
    };
  }, []);
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default Authorization;
