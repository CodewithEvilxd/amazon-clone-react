import { initializeApp } from "firebase/app";
import { getStorage, ref } from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyD_FWSkkUwiQsvJcZ8M1h5KwVbj3mzIe0o",
  authDomain: "amezon-clone-e0e23.firebaseapp.com",
  projectId: "amezon-clone-e0e23",
  storageBucket: "amezon-clone-e0e23.appspot.com",
  messagingSenderId: "637137640131",
  appId: "1:637137640131:web:f27311a5f33d8e3337a076",
  measurementId: "G-PVS43D67T0"
};

const firebase = initializeApp(firebaseConfig);

const storage = getStorage(firebase);

export { storage, ref as default }; 