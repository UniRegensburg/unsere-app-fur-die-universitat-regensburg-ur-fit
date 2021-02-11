import firebaseCore from "firebase/app";
import "firebase/auth";
import firebaseConfig from "../../constants/firebase.config";

const firebase = firebaseCore.initializeApp(firebaseConfig);

export default firebase;
