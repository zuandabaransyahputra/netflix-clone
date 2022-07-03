// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyBpiK4X-byt3VnbJKkDvQk9Qghunkxx9Ww',
  authDomain: 'netflix-clone-d87e0.firebaseapp.com',
  projectId: 'netflix-clone-d87e0',
  storageBucket: 'netflix-clone-d87e0.appspot.com',
  messagingSenderId: '245734966062',
  appId: '1:245734966062:web:fcb8b493ea13849c44b0bf',
  measurementId: 'G-Q9T6KPC8Q4',
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const auth = getAuth();

export default app;
export { auth, db };
