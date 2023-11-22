import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDAcwKJe9mHn3FNqOYmD0L7VnkbSZLEY2I",
    authDomain: "petpalace-259ea.firebaseapp.com",
    databaseURL: "https://petpalace-259ea-default-rtdb.firebaseio.com",
    projectId: "petpalace-259ea",
    storageBucket: "petpalace-259ea.appspot.com",
    messagingSenderId: "31585266660",
    appId: "1:31585266660:web:b11012885c5b514bedf5f1",
    measurementId: "G-2EP8D1CZBG"
};

const firebaseApp = initializeApp(firebaseConfig);
const auth = getAuth(firebaseApp);
const db = getFirestore(firebaseApp);

export { auth, createUserWithEmailAndPassword, db };