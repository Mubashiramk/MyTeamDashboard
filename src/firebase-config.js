import firebase from "firebase/compat/app";
import "firebase/compat/auth";

const app = firebase.initializeApp({
  apiKey: "AIzaSyDxypqxm5X81xo52-pJtjwnsGibttAxH44",
  authDomain: "user-auth-9a517.firebaseapp.com",
  projectId: "user-auth-9a517",
  storageBucket: "user-auth-9a517.appspot.com",
  messagingSenderId: "457408546980",
  appId: "1:457408546980:web:af7f9b0efd193d9468be31",
});

export const auth = app.auth();
export default app;
