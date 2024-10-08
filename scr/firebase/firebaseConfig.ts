// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics, isSupported } from "firebase/analytics";
import {getFirestore} from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCiTV1EvYd_lMFofNTZCfi2TFI79e3dXC4",
  authDomain: "noodledispenser.firebaseapp.com",
  projectId: "noodledispenser",
  storageBucket: "noodledispenser.appspot.com",
  messagingSenderId: "25474568483",
  appId: "1:25474568483:web:e9c13e17feca4d6343fc96",
  measurementId: "G-E37ZECGDJ2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Kiểm tra nếu Analytics được hỗ trợ, thì mới khởi tạo Analytics
isSupported().then((supported) => {
  if (supported) {
    const analytics = getAnalytics(app);
  } else {
    console.warn("Firebase Analytics is not supported in this environment.");
  }
});

export const FIRESTORE = getFirestore(app);