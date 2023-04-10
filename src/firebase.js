import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCAxrF164xuHYG47EECcFlbzsl2XOSh4tA",
  authDomain: "react-blog-5599c.firebaseapp.com",
  projectId: "react-blog-5599c",
  storageBucket: "react-blog-5599c.appspot.com",
  messagingSenderId: "1194788015",
  appId: "1:1194788015:web:1f965dd8974b165963005a",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

export { auth, db, storage };
