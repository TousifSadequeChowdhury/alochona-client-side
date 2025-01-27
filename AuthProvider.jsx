import { createContext, useEffect, useState } from "react";
import {
  getAuth,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  signInWithPopup,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { auth, googleProvider } from "./src/firebase.config"; // Ensure auth is correctly initialized in firebase.config.js

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true); // Add loading state to track auth state loading

  // Function to create a new user
  const registerUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // Function to log out
  const logOut = async () => {
    try {
      await signOut(auth);
      console.log("User logged out");
    } catch (error) {
      console.error("Error logging out:", error);
    }
  };

  // Log in with Google
  const googleLogin = () => {
    return signInWithPopup(auth, googleProvider)
      .then((result) => {
        const loggedInUser = result.user;
        setUser(loggedInUser); // Update user state
        console.log("Logged in with Google:", loggedInUser);
      })
      .catch((error) => {
        console.error("Google login error:", error);
      });
  };

  // Function to log in with email and password
  const userLogin = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  useEffect(() => {
    // Subscribe to auth state changes
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false); // Set loading to false once user state is determined
    });

    // Cleanup subscription on component unmount
    return () => unsubscribe();
  }, []);

  // Provide authentication information and methods to context consumers
  const authInfo = {
    user,
    setUser,
    registerUser,
    logOut,
    userLogin,
    googleLogin,
  };

  // Return children only after loading is complete
  return (
    <AuthContext.Provider value={authInfo}>
      {!loading ? children : null} {/* Render children only after loading is complete */}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
