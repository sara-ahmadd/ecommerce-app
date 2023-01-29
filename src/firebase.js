import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  getDocs,
  doc,
  deleteDoc,
  updateDoc,
  getDoc,
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAAH7wQlU0bqbv62lVYqCIlrX7fa_cwfIs",
  authDomain: "store-f7f0c.firebaseapp.com",
  projectId: "store-f7f0c",
  storageBucket: "store-f7f0c.appspot.com",
  messagingSenderId: "808396754106",
  appId: "1:808396754106:web:ef1a7c2ce6186e88b88683",
};

initializeApp(firebaseConfig);

const database = getFirestore();

export const collectionRef = collection(database, "products");

export const getProducts = getDocs(collectionRef).then((snapshot) => {
  let products = [];
  snapshot.docs.forEach((doc) => {
    products.push({ ...doc.data(), id: doc.id });
  });
  return products;
});

export const deleteSingleProduct = async (id) => {
  const docRef = doc(database, "products", id);
  await deleteDoc(docRef);
};
export const editProduct = async (id, data = {}) => {
  const docRef = doc(database, "products", id);
  await updateDoc(docRef, data);
};

export const getOneProduct = async (id) => {
  const docRef = doc(database, "products", id ?? doc.id);
  const docSnap = await getDoc(docRef);
  return docSnap.data();
};
