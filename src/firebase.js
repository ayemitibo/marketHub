import firebase from "firebase";
// import "@firebase/auth";
// import "@firebase/firestore";

// firebase init - add your own config here
const firebaseConfig = {
  apiKey: "AIzaSyDiMyzijUUDY6whTDWbGE9OMmzQV_QIRug",
  authDomain: "the-market-place-caca8.firebaseapp.com",
  databaseURL: "https://the-market-place-caca8.firebaseio.com",
  projectId: "the-market-place-caca8",
  storageBucket: "the-market-place-caca8.appspot.com",
  messagingSenderId: "391420546667",
  appId: "1:391420546667:web:50172e45bf538d9b072b2e",
};

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebase.firestore();

export { db, auth };
