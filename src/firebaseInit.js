// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyBHsscz7j1vQ4X0-RsxTjDPC0hSFvOMV80",
//   authDomain: "firechat-kemal.firebaseapp.com",
//   projectId: "firechat-kemal",
//   storageBucket: "firechat-kemal.appspot.com",
//   messagingSenderId: "453926701860",
//   appId: "1:453926701860:web:a9c4037d96ae21a9de41b1"
// };

// // // Initialize Firebase
// // const app = initializeApp(firebaseConfig);

// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// // import { getAnalytics } from "firebase/analytics";
// import { getFirestore } from "@firebase/firestore";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//     apiKey: "AIzaSyDwKQ-Kj8uIf6lldt5bh3lQBZp1SarNMx0",
//     authDomain: "firechat-snap.firebaseapp.com",
//     projectId: "firechat-snap",
//     storageBucket: "firechat-snap.appspot.com",
//     messagingSenderId: "37472328987",
//     appId: "1:37472328987:web:6dce0b06e3c5288bbfc7be",
//     measurementId: "G-GK3QHRHKZZ"
//   };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// // const analytics = getAnalytics(app);
// export const db = getFirestore()

import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

// live server
// let config = {
//    apiKey: "AIzaSyBLCD75EONxwsCGlJEkyeBkFMj_NhIgc3w",
//    authDomain: "aramata-703ac.firebaseapp.com",
//    projectId: "aramata-703ac",
//    storageBucket: "aramata-703ac.appspot.com",
//    messagingSenderId: "473742985049",
//    appId: "1:473742985049:web:9eef85380b87c0f4c9ee48",
// };
const firebaseConfig = {
   apiKey: "AIzaSyDwKQ-Kj8uIf6lldt5bh3lQBZp1SarNMx0",
   authDomain: "firechat-snap.firebaseapp.com",
   projectId: "firechat-snap",
   storageBucket: "firechat-snap.appspot.com",
   messagingSenderId: "37472328987",
   appId: "1:37472328987:web:6dce0b06e3c5288bbfc7be",
   measurementId: "G-GK3QHRHKZZ"
 };

// firebase init
const base = !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase;

export default base.firestore();