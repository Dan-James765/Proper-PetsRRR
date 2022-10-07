import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// import { getAnalytics } from "firebase/analytics";

export const firebaseConfig = {
  apiKey: "AIzaSyC7sQMYzFAbKwzceYZHjOyZ6l0fxQ96Zt8",
  authDomain: "proper-pets.firebaseapp.com",
  projectId: "proper-pets",
  storageBucket: "proper-pets.appspot.com",
  messagingSenderId: "1017712983785",
  appId: "1:1017712983785:web:9dd91837832d5426467a78",
  measurementId: "G-6H0SS1ZKFC",
};

// const analytics = getAnalytics(app);
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

export default app;
