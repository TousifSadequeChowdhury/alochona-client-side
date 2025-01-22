import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB6W1mghlO-XSW0RyFeQCQ7h9yczAB4hfU",
  authDomain: "alochona-e86f8.firebaseapp.com",
  projectId: "alochona-e86f8",
  storageBucket: "alochona-e86f8.firebasestorage.app",
  messagingSenderId: "246258914480",
  appId: "1:246258914480:web:8f2368c4afb1172f5c9775"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and Google provider
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

// Initialize Firestore
const db = getFirestore(app);

// Export initialized services
export { auth, db, googleProvider };