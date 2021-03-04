import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from "../../constants/firebase.config";

firebase.initializeApp(firebaseConfig);

export default firebase;
