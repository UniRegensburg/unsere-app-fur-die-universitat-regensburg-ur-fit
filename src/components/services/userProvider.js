import { db as database } from "./firebase-init";

export const getUser = (id) => {
  //let userId = firebase.auth().currentUser.uid;
  return database.collection("users").doc(id).get();
};
