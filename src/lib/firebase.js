/**
 * Firebase Hook
 */
import 'regenerator-runtime/runtime';
import firebase from 'firebase/compat/app';
import {
  getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword,
  signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged,
} from 'firebase/auth';
import {
  getFirestore, doc, setDoc, onSnapshot, deleteDoc, getDocs, collection, getDownloadURL
} from 'firebase/firestore';
import { getStorage, ref, uploadBytes } from 'firebase/storage'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyBX2tnOLDTaWXg6gj8Eh8bQKfOHgSJGJ0M',
  authDomain: 'samen-uit-samen-thuis-d3f81.firebaseapp.com',
  projectId: 'samen-uit-samen-thuis-d3f81',
  storageBucket: 'samen-uit-samen-thuis-d3f81.appspot.com',
  messagingSenderId: '850599044639',
  appId: '1:850599044639:web:463e373cc82b686c8d572a',
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);

// Initialize Authentication & provider so we can log in with google & email - password / Register with google & email
const auth = getAuth();
const provider = new GoogleAuthProvider(app);

// Initialize database so we can read&write documents in firestore
const db = getFirestore(app);

// Initialize storage so we can read&write documents in storage
const storage = getStorage(app);

export {
  auth, signInWithEmailAndPassword, signInWithPopup, provider, GoogleAuthProvider,
  signOut, createUserWithEmailAndPassword, db, doc, setDoc, onSnapshot,
  deleteDoc, onAuthStateChanged, getDocs, collection, storage, ref, uploadBytes, getDownloadURL,
};
