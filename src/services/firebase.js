import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyDbHY5mOpiyAmJvp_f_QNTq7WpDXfXLQxI",
    authDomain: "guimarte1992.firebaseapp.com",
    databaseURL: "https://guimarte1992.firebaseio.com",
    projectId: "guimarte1992",
    storageBucket: "guimarte1992.appspot.com",
    messagingSenderId: "517456906889",
    appId: "1:517456906889:web:a9f06a71edd854690b1458"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase