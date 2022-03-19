import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBwiAYPfFB_G65I7L6odQGD2x2AjMlYjrg",
  authDomain: "invoiceapp-56fa1.firebaseapp.com",
  projectId: "invoiceapp-56fa1",
  storageBucket: "invoiceapp-56fa1.appspot.com",
  messagingSenderId: "648927988978",
  appId: "1:648927988978:web:406f081f5f5d668c1a546b",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

export default firebaseApp.firestore();
