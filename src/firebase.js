import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyAr6k-TDuGBcNNlsm8UGuwXuWJT0KDV2Kk",
    authDomain: "blog-app-93201.firebaseapp.com",
    projectId: "blog-app-93201",
    storageBucket: "blog-app-93201.appspot.com",
    messagingSenderId: "170204128344",
    appId: "1:170204128344:web:7eb455d103dbdf8b8cd62d"
  };

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

export { auth, db, storage };
