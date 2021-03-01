import firebase from "./firebase-init";
import "firebase/firestore";

export async function getStructure() {
  var structure = {};
  let db = firebase.firestore();
  let path = db.collection("structure");
  try {
    await path.get().then((item) => {
      item.docs.map((doc) => {
        structure[doc.id] = doc.data();
        structure[doc.id].subcategories = path
          .doc(doc.id)
          .collection("subcategories")
          .get()
          .then((item) => {
            return item.docs.map((doc) => doc.data());
          });
      });
    });
  } catch (error) {
    console.log("Error getting the structure:", error);
  }
  return structure;
}

export async function getUser(id) {
  var user;
  let db = firebase.firestore();
  //let userId = firebase.auth().currentUser.uid;
  let path = db.collection("users").doc(id);
  try {
    user = await (await path.get()).data();
  } catch (error) {
    console.log("Error getting the user:", error);
  }
  return user;
}

export async function getContentById(id) {
  var item;
  let db = firebase.firestore();
  let path = db.collection("contents").doc(id);
  try {
    item = await (await path.get()).data();
  } catch (error) {
    console.log("Error getting the content:", error);
  }
  return item;
}

export async function getContentItemsBySubcategory(subcategory) {
  var contents = [];
  let db = firebase.firestore();
  let path = db.collection("contents").where("subcategory", "==", subcategory);
  try {
    let response = await path.get();
    response.docs.forEach((item) => contents.push(item.data()));
  } catch (error) {
    console.log("Error getting the content:", error);
  }
  return contents;
}
