import firebase from "firebase/app";
import "firebase/auth";

const app = firebase.initializeApp({
      apiKey: "AIzaSyCfkugK_POB0plg_V-q2uUoa0oiHzsGHDU",
      authDomain: "ur-fit-dev.firebaseapp.com",
      projectId: "ur-fit-dev",
      storageBucket: "ur-fit-dev.appspot.com",
      messagingSenderId: "1095282737858",
      appId: "1:1095282737858:web:76da9f35d77b5a32bef15b"
    });

//3. export it for use
export default app;