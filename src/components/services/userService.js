import { db as database } from "./firebaseProvider";

export const getUser = (id) => {
  return database.collection("users").doc(id).get();
};

export const createUser = (id, name) => {
  return database.collection("users").doc(id).set({ id, name, favorites: [] });
};
