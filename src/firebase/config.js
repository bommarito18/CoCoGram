import * as firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';

 // Your web app's Firebase configuration
 var firebaseConfig = {
  apiKey: "AIzaSyA0tqttcqQ3nV31Zgdg14KGtCC1a7UY_5o",
  authDomain: "cocochanelinsta-9cbf1.firebaseapp.com",
  projectId: "cocochanelinsta-9cbf1",
  storageBucket: "cocochanelinsta-9cbf1.appspot.com",
  messagingSenderId: "226106581233",
  appId: "1:226106581233:web:6dc2cd1befe8b7344d8950"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };