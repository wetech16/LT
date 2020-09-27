//const functions = require('firebase-functions')
//const admin = require('firebase-admin')
//admin.initalizeApp();

const firebaseConfig = {
  apiKey: "AIzaSyBXLKAQ-Dq3yLlfdpuHYp02jI85waNTuew",
  authDomain: "clone-92e8b.firebaseapp.com",
  databaseURL: "https://clone-92e8b.firebaseio.com",
  projectId: "clone-92e8b",
  storageBucket: "clone-92e8b.appspot.com",
  messagingSenderId: "771513745429",
  appId: "1:771513745429:web:b16ffb7963c623f1e98e1c",
  measurementId: "G-QLN0HYYBXY",
};
const firebase = require("firebase");
firebase.initializeApp(firebaseConfig);

const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors());
app.use(express.json());

const usersRouter = require("./routes/users");
app.use("/signup", usersRouter);

// https://baseurl.com/api/
//export.api = functions.https.onRequest(app);
app.listen(5000, () => {
  console.log(`Server is running on port: 5000`);
});
