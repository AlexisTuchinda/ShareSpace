import firebase  from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyDQ-GJqnsHpaRXdQzXLs7ABBjbpWjDR1XY",
    authDomain: "mural-db70d.firebaseapp.com",
    databaseURL: "https://mural-db70d.firebaseio.com",
    projectId: "mural-db70d",
    storageBucket: "mural-db70d.appspot.com",
    messagingSenderId: "721864886725",
    appId: "1:721864886725:web:5ce6fa6eb7b910c5cfe3ac",
    measurementId: "G-TY60LRSV8Q"
  };
  firebase.initializeApp(firebaseConfig);

  export default firebase;