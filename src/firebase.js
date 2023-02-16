import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBO7SywDq6-aVvOeZNarmNe-CHcLGulPfo",
  authDomain: "react-firebase-authentic-f55fa.firebaseapp.com",
  projectId: "react-firebase-authentic-f55fa",
  storageBucket: "react-firebase-authentic-f55fa.appspot.com",
  messagingSenderId: "166984598181",
  appId: "1:166984598181:web:90d7850b364f261577834c",
  measurementId: "G-2J2Z381K01"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export default app;