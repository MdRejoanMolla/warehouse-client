// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { getAuth } from 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
      apiKey: "AIzaSyBL9SZkgeZjVv8rg-qkJKyGf_jKIlYgIiU",
      authDomain: "bike-warehouse-ceeb8.firebaseapp.com",
      projectId: "bike-warehouse-ceeb8",
      storageBucket: "bike-warehouse-ceeb8.appspot.com",
      messagingSenderId: "544395702138",
      appId: "1:544395702138:web:236bb53c5e22c78dc9f0c3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)
export default auth;