// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// Thêm xác thực Firebase và khởi chạy xác thực firebase
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { getFirestore } from "firebase/firestore";


// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
    storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER,
    appId: process.env.REACT_APP_APP_ID,
    measurementId: process.env.REACT_APP_MEASUREMENT_ID
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
// Khởi tạo firebase authentication và tham chiếu tới service
export const auth = getAuth(app);
export const db = getFirestore(app);