import Firebase from 'firebase';

// config file from firebase web app
var config = {
  apiKey: "AIzaSyBWwYhIPzdVi7uWtwvxDICGKxjAo7q0AAA",
  authDomain: "umid-80be5.firebaseapp.com",
  databaseURL: "https://umid-80be5.firebaseio.com",
  projectId: "umid-80be5",
  storageBucket: "umid-80be5.appspot.com",
  messagingSenderId: "1012173456466",
  appId: "1:1012173456466:web:4d05c4a7903f7108230b8b",
  measurementId: "G-N9RLP7DQRG"
};

// const config = {
//   apiKey: "AIzaSyC76ppxHaf8fiI7k8FwL0Im4zk90--0VxU",
//   authDomain: "umid-9b6d5.firebaseapp.com",
//   databaseURL: "https://umid-9b6d5.firebaseio.com",
//   projectId: "umid-9b6d5",
//   storageBucket: "umid-9b6d5.appspot.com",
//   messagingSenderId: "82905971216",
//   appId: "1:82905971216:web:9866931a9ab983adf36895",
//   measurementId: "G-N704C5HJKF"
// };
//to initialize firebase 
let app = Firebase.initializeApp(config);
export const db = app.database();