  
import firebase from 'firebase'

var firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyBj_i1oc3wqlJajhzrYhIhI3y89d4h8D2U",
    authDomain: "retail-84f94.firebaseapp.com",
    databaseURL: "https://retail-84f94.firebaseio.com",
    projectId: "retail-84f94",
    storageBucket: "retail-84f94.appspot.com",
    messagingSenderId: "794258482643",
    appId: "1:794258482643:web:2f50aa0bec125394ff7b26",
    measurementId: "G-QCRB48LWD5"
  });

  const storage = firebaseApp.storage();
  const auth = firebaseApp.auth();
  const db = firebaseApp.firestore();

  export {db, storage, auth}; 