import * as firebase from 'firebase'

var config = {
    apiKey: "AIzaSyC31bZaTGk4j3M89Xr_kGacsMkFTThKt4Y",
    authDomain: "photowall-315fe.firebaseapp.com",
    databaseURL: "https://photowall-315fe.firebaseio.com",
    projectId: "photowall-315fe",
    storageBucket: "photowall-315fe.appspot.com",
    messagingSenderId: "742933908163"
  };

firebase.initializeApp(config);

const database = firebase.database()

export {database}
