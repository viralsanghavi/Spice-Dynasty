const {getDocs, collection} = require("firebase/firestore");
const {database} = require("firebaseConfig");

export const getCollectionData = async (collectionName) => {
  const querySnapshot = await getDocs(collection(database, collectionName));
  let collectionData = [];
  querySnapshot.forEach((doc) => {
    // doc.data() is never undefined for query doc snapshots

    console.log(doc.id, " => ", doc.data());
    collectionData = [...collectionData, {id: doc.id, ...doc.data()}];
  });
  console.log(collectionData);
  return collectionData;
};
