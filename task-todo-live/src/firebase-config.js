import { initializeApp } from "firebase/app";
import {getFirestore} from"firebase/firestore"
const firebaseConfig = {

    apiKey: "AIzaSyAX1p9vtKIo3mCFPU06wsXOBsJhch-vpIE",
  
    authDomain: "task-todo-live.firebaseapp.com",
  
    projectId: "task-todo-live",
  
    storageBucket: "task-todo-live.appspot.com",
  
    messagingSenderId: "422139621915",
  
    appId: "1:422139621915:web:dd404070cc3601cdcbfebe",
  
    measurementId: "G-TD83DSBZQX"
  
  };
  
  
  // Initialize Firebase
  
  const app = initializeApp(firebaseConfig);
  
 export const db = getFirestore(app);
//   const analytics = getAnalytics(app);



// const firebaseConfig = {

//     apiKey: "AIzaSyAowXKGuIO_4Xv2KLtRfdFqIKSHm7PduZs",
  
//     authDomain: "todo-list-4b5fb.firebaseapp.com",
  
//     projectId: "todo-list-4b5fb",
  
//     storageBucket: "todo-list-4b5fb.appspot.com",
  
//     messagingSenderId: "41932961628",
  
//     appId: "1:41932961628:web:295fb596a6265644983399",
  
//     measurementId: "G-0X2Q3BFV6B"
  
//   };
//   