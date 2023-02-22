import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
import {getFirestore} from "firebase/firestore"
import {getStorage} from "firebase/storage"

// Your web app's Firebase configuration
export const firebaseConfig = {
  apiKey: "AIzaSyBNBBtflZIWifYqCG9uOtHzixIRPz0hlg4",
  authDomain: "eshop-5db94.firebaseapp.com",
  projectId: "eshop-5db94",
  storageBucket: "eshop-5db94.appspot.com",
  messagingSenderId: "1016308592315",
  appId: "1:1016308592315:web:d071e0130693fd9cd1039e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth=getAuth(app);
export const db=getFirestore(app);
export const storage=getStorage(app);

export default app;