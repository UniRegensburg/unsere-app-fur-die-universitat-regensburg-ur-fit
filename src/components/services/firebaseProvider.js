import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import firebaseConfig from "../../constants/firebase.config";

firebase.initializeApp(firebaseConfig);

firebase
  .firestore()
  .enablePersistence()
  .catch((err) => {
    if (err.code === "failed-precondition") {
      console.log("persistence failed..probably beacuse of multiple tabs");
    } else if (err.code === "unimplemented") {
      console.log("persistence is not supported in this browser");
    }
  });

export const db = firebase.firestore();

export default firebase;
