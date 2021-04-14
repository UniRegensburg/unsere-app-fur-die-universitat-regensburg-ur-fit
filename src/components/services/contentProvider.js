import { db as database, storage as firebaseStorage } from "./firebaseProvider";
import firebase from "firebase/app";

export const getStructure = (observer) => {
  return database.collection("structure").onSnapshot(observer);
};

export const getStructureOnce = () => {
  return database.collection("structure").get();
};

export const getContentById = async (id) => {
  return database.collection("contents").doc(id).get();
};

export const getContentItemsBySubcategory = (
  category,
  subcategory,
  observer
) => {
  return database
    .collection("contents")
    .where("subcategory", "==", subcategory)
    .where("category", "==", category)
    .onSnapshot(observer);
};

export const getContentItemsByCategory = (category, observer) => {
  return database
    .collection("contents")
    .where("category", "==", category)
    .onSnapshot(observer);
};

export const getUserFavorites = (userId, observer) => {
  return database.collection("users").doc(userId).onSnapshot(observer);
};

export const getUserFavoritesOnce = (userId) => {
  return database.collection("users").doc(userId).get();
};

export const setFavoriteItem = (contentId, userId) => {
  return database
    .collection("users")
    .doc(userId)
    .update({
      favorites: firebase.firestore.FieldValue.arrayUnion(
        database.doc(`contents/${contentId}`)
      ),
    });
};

export const deleteFavoriteItem = (contentId, userId) => {
  return database
    .collection("users")
    .doc(userId)
    .update({
      favorites: firebase.firestore.FieldValue.arrayRemove(
        database.doc(`contents/${contentId}`)
      ),
    });
};

export const getContentsBySubcategories = (subcategories) => {
  let subcategoryValues = [];
  subcategories.forEach((subcategory) =>
    subcategoryValues.push(subcategory.value)
  );
  return database
    .collection("contents")
    .where("subcategory", "in", subcategoryValues)
    .get();
};

export const uploadFileToFirebaseStorage = (file, fileName) => {
  return firebaseStorage.ref().child(fileName).put(file);
};

export const getFileReference = (fileName) => {
  return firebaseStorage.ref(fileName).getDownloadURL();
};

export const uploadContentToFirestorage = (contentItems) => {
  return Promise.all(
    contentItems.map(async (item) => {
      let id = Math.random().toString(36).substring(2);
      item.id = id;
      await database.collection("contents").doc(id).set(item);
      return id;
    })
  );
};

export const getSubcategory = (subcategoryValue) => {
  return database
    .collection("structure")
    .where("value", "==", subcategoryValue)
    .get();
};

export const addNewSubcategory = async (subcategory) => {
  Promise.all(
    database
      .collection("structure")
      .doc(subcategory.category)
      .update({
        subcategories: firebase.firestore.FieldValue.arrayUnion({
          category: subcategory.category,
          description: subcategory.description,
          title: subcategory.title,
          value: subcategory.value,
        }),
      })
  );
};

export const deleteUserAccount = (userid) => {
  return database.collection("users").doc(userid).delete();
};
