import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAC--ixF6ldMCCo4GSTZ7Av5QXO-lR34qk",
  authDomain: "docs-7997e.firebaseapp.com",
  projectId: "docs-7997e",
  storageBucket: "docs-7997e.appspot.com",
  messagingSenderId: "506511953688",
  appId: "1:506511953688:web:7edde56ca415ce2eaa986d",
};

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = app.firestore();

export { db };
