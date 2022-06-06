import firebase from 'firebase/compat/app';
import 'firebase/compat/storage';
import 'firebase/compat/firestore';
import { getAuth } from 'firebase/auth';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBw6cnztLp18HjIwqYgZ6erz-kqTkll8Bk",
  authDomain: "pic-up-f3894.firebaseapp.com",
  projectId: "pic-up-f3894",
  storageBucket: "pic-up-f3894.appspot.com",
  messagingSenderId: "638608923346",
  appId: "1:638608923346:web:8b75958af8415d3a6b6b0b",
  measurementId: "G-BM2V2502NG",
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };

export const auth = getAuth(app);
export default app;