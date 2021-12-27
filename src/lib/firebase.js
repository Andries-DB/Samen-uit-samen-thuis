/**
 * Firebase Hook
 */

import firebase from 'firebase/compat/app';
import {
  getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword,
  signInWithPopup, GoogleAuthProvider, signOut,
} from 'firebase/auth';

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

const auth = getAuth();
const provider = new GoogleAuthProvider(app);

export {
  auth, signInWithEmailAndPassword, signInWithPopup, provider, GoogleAuthProvider,
  signOut, createUserWithEmailAndPassword,
};
