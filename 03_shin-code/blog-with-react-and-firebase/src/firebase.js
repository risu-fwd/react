import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAZA92gHIJBMVdxI0G6ZkLXvp83W7io9iY",
  authDomain: "blog-f45d8.firebaseapp.com",
  projectId: "blog-f45d8",
  storageBucket: "blog-f45d8.appspot.com",
  messagingSenderId: "287340852261",
  appId: "1:287340852261:web:a93c4e40d123b3f922bbcc",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const db = getFirestore(app);

export { auth, provider, db };
