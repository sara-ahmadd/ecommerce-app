import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore";
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

const collectionRef = collection(database, "products");

getDocs(collectionRef).then((snapshot) => {
  console.log(snapshot.docs.map((x) => x._document.data.value.mapValue.fields));
});
