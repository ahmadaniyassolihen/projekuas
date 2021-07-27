import firebase from 'firebase';
// konfigurasi ke firebase
const firebaseConfig = {
  apiKey: "AIzaSyD-TuyGgMbIBNvTxB7OjS7CEY2K-On3NWw",
  authDomain: "catatanku-23b5b.firebaseapp.com",
  databaseURL: "https://catatanku-23b5b-default-rtdb.firebaseio.com",
  projectId: "catatanku-23b5b",
  storageBucket: "catatanku-23b5b.appspot.com",
  messagingSenderId: "534538193812",
  appId: "1:534538193812:web:1ff9a526b372ecf9469d81",
  measurementId: "G-F4CJKHCK85"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const FIREBASE = firebase;

export default FIREBASE;
