import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCQ1CGA7DUKKUib9fHrfX8vS7AcHR3nBwA",
  authDomain: "buildyourpc-93d11.firebaseapp.com",
  projectId: "buildyourpc-93d11",
  storageBucket: "buildyourpc-93d11.appspot.com",
  messagingSenderId: "665376515800",
  appId: "1:665376515800:web:0344605906e1fd06af99ad"
};

const app = initializeApp(firebaseConfig);

export const getFirestoreApp = () => app 