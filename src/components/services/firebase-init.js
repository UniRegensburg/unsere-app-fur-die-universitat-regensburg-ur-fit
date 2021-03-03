import firebaseCore from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import firebaseConfig from "../../constants/firebase.config";

const firebase = firebaseCore.initializeApp(firebaseConfig);

firebaseCore
  .firestore()
  .enablePersistence()
  .catch((err) => {
    if (err.code === "failed-precondition") {
      console.log("persistence failed..probably beacuse of multiple tabs");
    } else if (err.code === "unimplemented") {
      console.log("persistence is not supported in this browser");
    }
  });

export const db = firebaseCore.firestore();

export default firebase;
