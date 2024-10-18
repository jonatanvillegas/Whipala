import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { initializeAuth,getReactNativePersistence } from "firebase/auth";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyAImzWYZThqx1aogcxYD56irO3VjZlnopQ",
  authDomain: "whipala-e99fd.firebaseapp.com",
  projectId: "whipala-e99fd",
  storageBucket: "whipala-e99fd.appspot.com",
  messagingSenderId: "177013851784",
  appId: "1:177013851784:web:861c46d29519630829c13d",
  measurementId: "G-PT4CYT3RY5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage)
});
const db = getFirestore(app);
const analytics = getAnalytics(app);

export {app, auth,db}