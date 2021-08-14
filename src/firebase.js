import firebase from "firebase";


    const firebaseConfig = {
        apiKey: "AIzaSyARmqD_5_x3Bz2u9HS4CnMz8WT72xgahSI",
        authDomain: "clone-cd393.firebaseapp.com",
        databaseURL: "https://clone-cd393.firebaseio.com",
        projectId: "clone-cd393",
        storageBucket: "clone-cd393.appspot.com",
        messagingSenderId: "477088157325",
        appId: "1:477088157325:web:124021570ab6d5fee55cc4",
        measurementId: "G-LSBWEQWG4N"
    };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();


export {db , auth };