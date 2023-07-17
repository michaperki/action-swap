import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import app from "./firebase";

// Function to sign up a new user
const signUpWithEmailAndPassword = async (email, password) => {
    const auth = getAuth(app);
    const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
    );
    return userCredential.user;
}; 

// Function to log out the current user
const logout = async () => {
    const auth = getAuth(app);
    await signOut(auth);
};

// Function to log in an existing user
const signIn = async (email, password) => {
    const auth = getAuth(app);
    const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
    );
    return userCredential.user;
}

export { signUpWithEmailAndPassword, logout, signIn };