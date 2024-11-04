//* Import the functions you need from the SDKs you need
import { initializeApp, getApps } from 'firebase/app';
import { getAuth, setPersistence, browserLocalPersistence } from 'firebase/auth';

//* Add the Web App's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAylr2oRpbqrMvZB9VEynyAO6R9vFjOjs0",
  authDomain: "pigeontoken-daccf.firebaseapp.com",
  projectId: "pigeontoken-daccf",
  storageBucket: "pigeontoken-daccf.appspot.com",
  messagingSenderId: "601361727598",
  appId: "1:601361727598:web:3b5534e100f44b9be8667f",
  measurementId: "G-0WRBCZ0MM9",
};

//* Initialize Firebase
let firebase_app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];

//* Initialize Firebase Auth and set persistence
const auth = getAuth(firebase_app);
setPersistence(auth, browserLocalPersistence)
  .then(() => {
    console.log("Session persistence set to LOCAL");
  })
  .catch((error) => {
    console.error("Failed to set session persistence:", error);
  });

export { auth };
export default firebase_app;
