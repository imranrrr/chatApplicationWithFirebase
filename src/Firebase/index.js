import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import {getStorage} from "firebase/storage"
const firebaseConfig = {
  apiKey: "AIzaSyCgJF7rd2S1joYAp4QFkR6nseoWKlzF1tM",
  authDomain: "messenger-beb52.firebaseapp.com",
  projectId: "messenger-beb52",
  storageBucket: "messenger-beb52.appspot.com",
  messagingSenderId: "966938969941",
  appId: "1:966938969941:web:b381842f0816e943abd1dc"
};

// Initialize Firebase
 const app = initializeApp(firebaseConfig);
 const auth = getAuth();
 const storage = getStorage();
 export {app, auth, storage}