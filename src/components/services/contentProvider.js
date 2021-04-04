import { db as database } from "./firebaseProvider";
import firebase from "firebase/app";

export const getStructure = (observer) => {
  return database.collection("structure").onSnapshot(observer);
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
