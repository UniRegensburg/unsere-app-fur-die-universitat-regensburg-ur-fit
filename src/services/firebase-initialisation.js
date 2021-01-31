import firebase from "firebase/app";

class FirebaseInit {
    constructor() {
        // Your web app's Firebase configuration
        this.firebaseConfig = {
            apiKey: "AIzaSyCfkugK_POB0plg_V-q2uUoa0oiHzsGHDU",
            authDomain: "ur-fit-dev.firebaseapp.com",
            projectId: "ur-fit-dev",
            storageBucket: "ur-fit-dev.appspot.com",
            messagingSenderId: "1095282737858",
            appId: "1:1095282737858:web:76da9f35d77b5a32bef15b"
        };
    }
    
    init() {
        // Initialize Firebase
        firebase.initializeApp(this.firebaseConfig);
    }
}

export default FirebaseInit();