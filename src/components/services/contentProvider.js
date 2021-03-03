import { db as database } from "./firebase-init";

export const getStructure = (observer) => {
  return database.collection("structure").onSnapshot(observer);
};

export const getContentById = async (id) => {
  let content = await database
    .collection("contents")
    .doc(id)
    .get({ source: "cache" });
  if (!content.exists) {
    return database.collection("contents").doc(id).get({ source: "server" });
  } else {
    return content;
  }
};

export const getContentItemsBySubcategory = (subcategory, observer) => {
  return database
    .collection("contents")
    .where("subcategory", "==", subcategory)
    .onSnapshot(observer);
};

export const getUserFavorites = (userId, observer) => {
  return database.collection("users").doc(userId).onSnapshot(observer);
};
