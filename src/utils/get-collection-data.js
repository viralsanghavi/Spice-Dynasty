import {collection, getDocs} from "firebase/firestore";
const {database} = require("firebaseConfig");

export const getFireStoreData = async (collectionName, setData, isActive) => {
  const querySnapshot = await getDocs(collection(database, collectionName));
  console.log(collectionName);
  let datum = [];
  querySnapshot.forEach(async (doc) => {
    datum = [...datum, {id: doc.id, ...doc.data()}];
  });
  return datum;
};
